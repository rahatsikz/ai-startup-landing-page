import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "en", label: "English", countryCode: "US" },
  { code: "hi", label: "हिन्दी", countryCode: "IN" },
  { code: "ja", label: "日本語", countryCode: "JP" },
];
export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale(); // ✅ reliable locale from next-intl

  const handleChange = (newLocale: string) => {
    router.replace({ pathname }, { locale: newLocale });
  };

  return (
    <Select value={currentLocale} onValueChange={handleChange}>
      <SelectTrigger className='w-fit'>
        <SelectValue>
          <ReactCountryFlag
            countryCode={
              languages.find((l) => l.code === currentLocale)
                ?.countryCode as string
            }
            svg
            style={{ width: "1.5em", height: "1.5em" }}
          />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className='flex items-center gap-2'>
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <span>{lang.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
