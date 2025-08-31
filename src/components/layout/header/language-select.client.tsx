'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function LanguageSelectClientOnly() {
  const locale = useLocale();                 // hazırki dil (client)
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: string) => {
    router.replace(pathname, {locale: lang}); // locale-i düzgün dəyişir
  };

  return (
     <Select onValueChange={handleChange}  defaultValue={locale}>
      <SelectTrigger className="w-[60px] bg-[#fff] !h-[30px] !px-2 text-[11px] font-bold  ">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='font-medium mt-[10px] !min-w-[60px]'>
        <SelectGroup>
          <SelectItem className={'text-[11px] font-semibold  '} value="az">AZ</SelectItem>
          <SelectItem className={'text-[11px] font-semibold  '} value="en">EN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
