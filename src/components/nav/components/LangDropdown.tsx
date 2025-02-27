import { useEffect, useState } from 'react';
import { Animation } from '../../animation';

type Language = {
  code: string;
  label: string;
  img: string;
};

const languages: Language[] = [
  { code: 'vi', label: 'Vietnamese', img: '/vietnam.png' },
  { code: 'en', label: 'English', img: '/united-states.png' },
];

type LangDropdownProps = {
  position?: 'left' | 'right';
};

export const LangDropdown = ({ position }: LangDropdownProps) => {
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';
    const selectedLang = languages.find((l) => l.code === lang) || languages[0];
    setSelectedLang(selectedLang);
  }, []);

  const handleSelectLang = (lang: Language) => {
    if (selectedLang.code === lang.code) return;

    setSelectedLang(lang);
    setIsOpenDropdown(false);

    localStorage.setItem('lang', lang.code);
    window.location.reload();
  };

  return (
    <div className="relative inline-block text-left">
      <Animation>
        <button
          className="flex items-center px-2 py-2 rounded-lg hover:bg-black/10 cursor-pointer"
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        >
          <img src={selectedLang.img} alt={selectedLang.label} className="w-10 h-6 object-contain" />
          <span className={`ml-2 text-xs ${position === 'left' ? 'text-black' : 'text-white'}`}>▼</span>
        </button>
      </Animation>

      {isOpenDropdown && (
        <div className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} mt-2 bg-white border rounded-md shadow-lg`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLang(lang)}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                {selectedLang.code === lang.code && <img src="/check.png" alt="" className="w-full h-full object-contain" />}
              </div>
              <div className="w-8 h-6 flex items-center justify-center mr-2">
                <img src={lang.img} alt={lang.label} className="w-full h-full object-contain" />
              </div>
              <span className="font-bold">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
