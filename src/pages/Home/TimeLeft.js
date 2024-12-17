import { useEffect, useState } from "react";
function Time() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const now = new Date();
    const targetDate = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return { timeLeft };
}

export default Time;
