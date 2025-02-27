type LangType = typeof enLang;

export const t = (key: keyof LangType) => {
  const lang = localStorage.getItem('lang') || 'en';
  return lang === 'en' ? enLang[key] : viLang[key];
};

const enLang = {
  about_us: 'About Us',
  games: 'Games',
  partners: 'Partners',
  contact_us: 'Contact Us',
  we_are_getting_ready: 'We’re Getting Ready',
  we_will_back_to_something_amazing:
    'We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.',
  days: 'Days',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  enter_your_email: 'Enter your email',
  browse_our_selection_of_free_online_games:
    'Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.',
  millions_icon: 'M',
  users: 'Users',
  '24_hours': '24 - Hours',
  '24/7_access_ensures_operators_businesses_runs_smoothly_all_year_long':
    "24/7 access ensures operators' businesses runs smoothly all year long.",
  design: 'Design',
  combining_imaginative_universes_play_dynamics_and_unprecedented_gameplay_our_games_transcend_the_boundaries_of_the_virtual_world_by_weaving_innovative_gameplay:
    'Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.',
  team: 'Team',
  etech_is_an_award_winning_international_studio_of_designers_artists_animators_and_producers_that_create_content_for_the_biggest_names_in_film_and_video_games:
    'Etech is an award-winning, international studio of designers, artists, animators, and producers that create content for the biggest names in film and video games.',
  our_games: 'Our Games',
  as_a_pioneer_of_mobile_app_gamification_we_take_pride_in_originality_and_individuality_providing_global_players_with_state_of_the_art_games_that_feature_splendid_storylines_sensational_sound_effects_and_magnificent_animation_that_never_cease_to_impress:
    'As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects, and magnificent animation that never cease to impress.',
  our_partners: 'Our Partners',
  address: 'Address',
  address_valletta_buildings: 'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US',
  address_street: '20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam',
  or: 'Or',
  subscribe: 'Subscribe',
  subscribe_to_our_newsletter_and_be_the_first_to_know_about_our_updates:
    'Subscribe to our newsletter and be the first to know about our updates',
};

const viLang = {
  about_us: 'Về chúng tôi',
  games: 'Trò chơi',
  partners: 'Đối tác',
  contact_us: 'Liên hệ',
  we_are_getting_ready: 'Trò chơi sắp ra mắt',
  we_will_back_to_something_amazing:
    'Chúng tôi sẽ trở lại với một điều tuyệt vời. Để nhận các bản cập nhật mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng tôi.',
  days: 'Ngày',
  hours: 'Giờ',
  minutes: 'Phút',
  seconds: 'Giây',
  enter_your_email: 'Nhập email của bạn',
  browse_our_selection_of_free_online_games:
    'Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có một khoảng thời gian tuyệt vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên Etech.',
  millions_icon: 'Triệu',
  users: 'Người chơi',
  '24_hours': 'Truy Cập 24/7',
  '24/7_access_ensures_operators_businesses_runs_smoothly_all_year_long':
    'Đảm bảo hoạt động kinh doanh của các nhà khai thác hoạt động trơn tru suốt cả năm.',
  design: 'Thiết kế',
  combining_imaginative_universes_play_dynamics_and_unprecedented_gameplay_our_games_transcend_the_boundaries_of_the_virtual_world_by_weaving_innovative_gameplay:
    'Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò chơi của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo.',
  team: 'Đội ngũ',
  etech_is_an_award_winning_international_studio_of_designers_artists_animators_and_producers_that_create_content_for_the_biggest_names_in_film_and_video_games:
    'Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh vực điện ảnh và trò chơi điện tử.',
  our_games: 'Trò chơi',
  as_a_pioneer_of_mobile_app_gamification_we_take_pride_in_originality_and_individuality_providing_global_players_with_state_of_the_art_games_that_feature_splendid_storylines_sensational_sound_effects_and_magnificent_animation_that_never_cease_to_impress:
    'Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động, chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng.',
  our_partners: 'Đối tác',
  address: 'Địa chỉ',
  address_valletta_buildings: 'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, Mỹ',
  address_street: 'Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Việt Nam',
  or: 'Hoặc',
  subscribe: 'Theo dõi',
  subscribe_to_our_newsletter_and_be_the_first_to_know_about_our_updates:
    'Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về các cập nhật của chúng tôi',
};
