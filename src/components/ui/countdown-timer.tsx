"use client";

import { Clock } from "lucide-react";
import Countdown from "react-countdown";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="flex items-center justify-center gap-2.5 bg-gray-100 p-2 rounded-md border text-sm  text-red-500">
      <Clock className="size-4" />

      <span className="font-semibold" suppressHydrationWarning>
        Offer ends in: {days}d {hours}h {minutes}m {seconds}s
      </span>
    </div>
  );
};

export const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  return <Countdown date={new Date(targetDate)} renderer={renderer} />;
};
