import { Swiper, SwiperSlide } from 'swiper/react';
import { CountdownTimer } from './components/countdown';
import { Input } from './components/input';
import { Nav } from './components/nav';
import { DATA_GAME } from './data/game';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { DATA_PARTNER } from './data/partner';
import { ButtonScrollToggle } from './components/button-scroll-to-top';
import { t } from './data/lang';
import { Animation } from './components/animation';

import 'swiper/swiper-bundle.css';
import { AnimationNumber } from './components/animation/number';

function App() {
  const swiperRef = useRef<any>(null);

  return (
    <>
      <header className="relative">
        <div className="relative">
          <img src="/bg.png" alt="bg" className="h-screen w-full object-cover" />

          <div className="absolute top-0 left-0 w-full">
            <Nav />
          </div>
          <div className="absolute bottom-0 left-0 w-full md:w-auto transform translate-y-1/2 lg:translate-y-0">
            <img src="/fairy.png" alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 pt-10 px-4">
            <Animation>
              <h1 className="text-white text-[40px] md:text-[80px] font-bold text-center font-playfair">{t('we_are_getting_ready')}</h1>
            </Animation>
            <Animation>
              <CountdownTimer endAt={new Date('2025-03-26T23:59:59')} />
            </Animation>
            <Animation>
              <div className="relative mt-[40px] md:mt-[80px] max-w-[560px] flex flex-col gap-4">
                <span className="text-white text-[14px] md:text-[18px] text-center block px-7 z-10">
                  {t('we_will_back_to_something_amazing')}
                </span>
                <div className="z-10">
                  <Input placeholder={t('enter_your_email')} />
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </header>
      <section id="about" className="bg-white py-20 px-4 md:px-10 mt-[200px] sm:mt-[350px] md:mt-[420px] lg:mt-0">
        <div className="flex flex-col lg:flex-row container mx-auto gap-8">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <Animation direction="left">
              <h2 className="text-[40px] md:text-[60px] font-bold text-black font-playfair">{t('about_us')}</h2>
            </Animation>
            <Animation direction="left" delay={0.3}>
              <span className="text-[14px] text-[#757575]">{t('browse_our_selection_of_free_online_games')}</span>
            </Animation>

            <div className="flex lg:flex-col gap-10 md:gap-20">
              <div>
                <Animation direction="left" delay={0.4}>
                  <div className="flex items-center gap-2">
                    <AnimationNumber
                      n={600}
                      style={{
                        fontSize: 'clamp(40px, 10vw, 80px)',
                        fontWeight: 'bold',
                        color: '#079BEE',
                      }}
                    />
                    <span className="text-[20px] md:text-[40px] font-bold text-[#079BEE]">{t('millions_icon')}</span>
                    <span className="text-[44px] md:text-[80px] font-bold text-[#079BEE]">+</span>
                  </div>
                </Animation>
                <Animation direction="left" delay={0.4}>
                  <span className="text-[24px] font-bold text-black">{t('users')}</span>
                </Animation>
              </div>
              <div>
                <Animation direction="left" delay={0.5}>
                  <div className="flex items-center gap-2">
                    <AnimationNumber
                      n={135}
                      style={{
                        fontSize: 'clamp(40px, 10vw, 80px)',
                        fontWeight: 'bold',
                        color: '#079BEE',
                      }}
                    />
                    <span className="text-[44px] md:text-[80px] font-bold text-[#079BEE]">+</span>
                  </div>
                </Animation>
                <Animation direction="left" delay={0.5}>
                  <span className="text-[24px] font-bold text-black">{t('games')}</span>
                </Animation>
              </div>
            </div>
          </div>
          <Animation className="lg:w-1/2 bg-[#EEEEEE] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-10 px-2 py-8 md:px-30 ">
              <div className="flex gap-2">
                <div>
                  <img src="/calender.png" alt="" />
                </div>
                <div className="flex-1">
                  <div className="text-[24px] font-bold text-black">{t('24_hours')}</div>
                  <div className="text-[14px] text-[#757575]">
                    {t('24/7_access_ensures_operators_businesses_runs_smoothly_all_year_long')}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img src="/pen-tool.png" alt="" />
                </div>
                <div className="flex-1">
                  <div className="text-[24px] font-bold text-black">{t('design')}</div>
                  <div className="text-[14px] text-[#757575]">
                    {t(
                      'combining_imaginative_universes_play_dynamics_and_unprecedented_gameplay_our_games_transcend_the_boundaries_of_the_virtual_world_by_weaving_innovative_gameplay'
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img src="/people.png" alt="" />
                </div>
                <div className="flex-1">
                  <div className="text-[24px] font-bold text-black">{t('team')}</div>
                  <div className="text-[14px] text-[#757575]">
                    {t(
                      'etech_is_an_award_winning_international_studio_of_designers_artists_animators_and_producers_that_create_content_for_the_biggest_names_in_film_and_video_games'
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Animation>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="relative z-10 floating">
            <Animation>
              <img src="/Illustrator.png" alt="" />
            </Animation>
          </div>
          <div className="-mt-12">
            <Animation>
              <img src="/pin-map.png" alt="" />
            </Animation>
          </div>
        </div>
      </section>
      <section id="our-games" className="bg-white py-20 px-4 md:px-10">
        <div className="container mx-auto">
          <div className="text-center">
            <Animation>
              <div className="text-[40px] md:text-[60px] font-bold text-black font-playfair">{t('our_games')}</div>
            </Animation>
            <Animation>
              <div className="text-[14px] text-[#757575] md:w-1/2 mx-auto">
                {t(
                  'as_a_pioneer_of_mobile_app_gamification_we_take_pride_in_originality_and_individuality_providing_global_players_with_state_of_the_art_games_that_feature_splendid_storylines_sensational_sound_effects_and_magnificent_animation_that_never_cease_to_impress'
                )}
              </div>
            </Animation>
          </div>

          <div className="mx-auto mt-5 md:mt-10 flex justify-center">
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-fit">
              {DATA_GAME.map((game, index) => (
                <div key={index} className={`grid-item_our-game`}>
                  <Animation delay={index * 0.1}>
                    <div className="relative rounded-lg overflow-hidden w-fit">
                      <div>
                        <img src={game.image} alt="" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0009E1]/50 to-transparent flex flex-col justify-end gap-1 md:gap-4 p-4">
                        <h3 className="text-white text-[24px] md:text-[48px] font-bold">{game.name}</h3>
                        <p className="text-white text-[12px] md:text-[14px]">{game.description}</p>
                      </div>
                    </div>
                  </Animation>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="our-partners" className="bg-[#F5F5F5] py-20 px-4 md:px-10">
        <div className="container mx-auto">
          <Animation>
            <div className="text-center">
              <div className="text-[40px] md:text-[60px] font-bold text-black font-playfair">{t('our_partners')}</div>
            </div>
          </Animation>
          <Animation>
            <div className="relative w-[calc(100%-40px)] mx-auto mt-5 md:mt-10">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-full z-10 text-white p-2 rounded shadow-lg cursor-pointer bg-white hover:bg-blue-200 transition-all"
              >
                <img src="/keyboard_arrow_left.png" alt="" />
              </button>

              {/* Swiper */}
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation]}
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {DATA_PARTNER.map((partner, index) => (
                  <SwiperSlide key={index} className="p-10 flex justify-center items-center">
                    <img src={partner.img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Nút Next */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-full z-10 text-white p-2 rounded shadow-lg cursor-pointer bg-white hover:bg-blue-200 transition-all"
              >
                <img src="/keyboard_arrow_right.png" alt="" />
              </button>
            </div>
          </Animation>
        </div>
      </section>
      <footer
        className="bg-[#1A1A1A]"
        style={{ backgroundImage: 'url(/bg-footer.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto py-10 px-4">
          <div className="flex gap-10 lg:gap-20 flex-col lg:flex-row">
            <div className="flex-1 flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <img src="/logo.png" alt="" />
              <div className="flex mt-10 gap-2">
                <Animation>
                  <img src="/twitter-outlined.png" alt="" />
                </Animation>
                <Animation>
                  <img src="/facebook-filled.png" alt="" />
                </Animation>
                <Animation>
                  <img src="/llinkedin-filled.png" alt="" />
                </Animation>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 lg:gap-10">
              <Animation>
                <div className="text-white text-[24px] font-bold">{t('address')}</div>
              </Animation>
              <Animation>
                <div className="flex gap-2">
                  <div>
                    <img src="/location.png" alt="" />
                  </div>
                  <div>
                    <div className="text-white text-[14px]">{t('address_valletta_buildings')}</div>
                    <div className="text-white text-[14px] mt-2">{t('address_street')}</div>
                  </div>
                </div>
              </Animation>
              <Animation>
                <div className="flex gap-2 item-center">
                  <div>
                    <img src="/mobile.png" alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="text-white text-[14px]">(+1) 555-0108-000 {t('or')} (+236) 555-0108</span>
                  </div>
                </div>
              </Animation>
            </div>
            <div className="flex-1 flex flex-col gap-4 lg:gap-10">
              <Animation>
                <div className="text-white text-[24px] font-bold">{t('subscribe')}</div>
              </Animation>
              <Animation>
                <div className="flex gap-2">
                  <span className="text-white text-[14px]">
                    {t('subscribe_to_our_newsletter_and_be_the_first_to_know_about_our_updates')}
                  </span>
                </div>
              </Animation>
              <Animation>
                <div>
                  <Input placeholder={t('enter_your_email')} variant="outlined" />
                </div>
              </Animation>
            </div>
          </div>
        </div>
        <div className="text-white text-[14px] lg:text-[18px] flex justify-center items-center bg-black w-full h-20">
          © 2017 Copyright. Policy.
        </div>
      </footer>

      <ButtonScrollToggle />
    </>
  );
}

export default App;
