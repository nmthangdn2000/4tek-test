import { useState, useEffect, Fragment } from 'react';
import { t } from '../../data/lang';

type CountdownTimerProps = {
  endAt: Date;
};

export const CountdownTimer = ({ endAt }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = endAt.getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endAt]);

  return (
    <div className="flex justify-between bg-white px-4 md:px-10 py-4 rounded-xl shadow-lg text-black gap-2 md:gap-12">
      {Object.entries(timeLeft).map(([label, value], index) => (
        <Fragment key={label}>
          <div className="flex flex-col items-center justify-center mx-2">
            <span className="text-[36px] md:text-[60px] font-bold font-playfair w-[42px] md:w-[70px]">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-base font-bold">
              {label === 'days' ? t('days') : label === 'hours' ? t('hours') : label === 'minutes' ? t('minutes') : t('seconds')}
            </span>
          </div>
          {index < 3 && <span className="text-[36px] md:text-[60px] font-bold mt-1">:</span>}
        </Fragment>
      ))}
    </div>
  );
};
