import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Kolkata',
});

/** Live local time in Bangalore. Updates twice a minute; costs nothing. */
export default function LocalTime() {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 20000);
    return () => clearInterval(id);
  }, []);

  return <span>{time} IST</span>;
}
