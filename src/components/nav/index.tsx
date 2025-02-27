import { useState } from 'react';
import { LangDropdown } from './components/LangDropdown';
import { t } from '../../data/lang';
import { Animation } from '../animation';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Animation>
            <img src="/logo.png" className="h-16" alt="Ztech" />
          </Animation>
        </a>
        <div className="items-center space-x-10 hidden md:flex md:w-auto">
          <ul className="flex space-x-10 font-montserrat">
            <li>
              <Animation>
                <a href="#" className="font-bold uppercase">
                  {t('about_us')}
                </a>
              </Animation>
            </li>
            <li>
              <Animation>
                <a href="#" className="font-bold uppercase">
                  {t('games')}
                </a>
              </Animation>
            </li>
            <li>
              <Animation>
                <a href="#" className="font-bold uppercase">
                  {t('partners')}
                </a>
              </Animation>
            </li>
            <li>
              <Animation>
                <a href="#" className="font-bold uppercase">
                  {t('contact_us')}
                </a>
              </Animation>
            </li>
          </ul>
          <LangDropdown />
        </div>

        <div className="md:hidden">
          <button
            className="flex items-center px-2 py-2 rounded-lg shadow hover:bg-black/10 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="/menu.png" alt="menu" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* menu mobile full screen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10 md:hidden">
          <div className="bg-white w-full h-full md:hidden">
            <div className="flex justify-between items-center p-4">
              <LangDropdown position="left" />
              <div className="flex justify-end p-4">
                <button
                  className="flex items-center px-2 py-2 rounded-lg hover:bg-black/10 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img src="/close.png" alt="close" className="w-8 h-8" />
                </button>
              </div>
            </div>
            <ul className="flex flex-col items-center px-4 font-montserrat">
              <li className="border-b border-[#EEEEEE] p-6 cursor-pointer w-full flex justify-center items-center hover:bg-black/10">
                <a href="#" className="font-bold text-black uppercase">
                  {t('about_us')}
                </a>
              </li>
              <li className="border-b border-[#EEEEEE] p-6 cursor-pointer w-full flex justify-center items-center hover:bg-black/10">
                <a href="#" className="font-bold text-black uppercase">
                  {t('games')}
                </a>
              </li>
              <li className="border-b border-[#EEEEEE] p-6 cursor-pointer w-full flex justify-center items-center hover:bg-black/10">
                <a href="#" className="font-bold text-black uppercase">
                  {t('partners')}
                </a>
              </li>
              <li className="p-6 cursor-pointer w-full flex justify-center items-center hover:bg-black/10">
                <a href="#" className="font-bold text-black uppercase">
                  {t('contact_us')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
