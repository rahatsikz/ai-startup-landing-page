import { useTranslations as useTranslationsBase } from "next-intl";
import en from "@/messages/en.json";

export function useNestedTranslations<T extends keyof Messages>(
  namespace: T
): Messages[T] extends string
  ? () => string
  : Messages[T] extends any[]
  ? (key: string) => string // For arrays
  : (key: keyof Messages[T]) => string; // For objects

export function useNestedTranslations<T extends keyof Messages>(namespace: T) {
  const t = useTranslationsBase();

  return (key?: any) => {
    const namespaceData = en[namespace as keyof typeof en];

    if (typeof namespaceData === "string") {
      return t(String(namespace));
    } else if (Array.isArray(namespaceData)) {
      if (key === undefined) {
        throw new Error(
          `Key is required for array namespace: ${String(namespace)}`
        );
      }
      return t(`${String(namespace)}.${key}`);
    } else {
      if (key === undefined) {
        throw new Error(
          `Key is required for nested namespace: ${String(namespace)}`
        );
      }
      return t(`${String(namespace)}.${String(key)}`);
    }
  };
}
