import React from 'react';

type OneDayProps = {
  day: Date;
};

export default function OneDay({ day }: OneDayProps): JSX.Element {
  return (
    <div className="h-[100px] border border-orange-300 relative">
      <span className="absolute top-1 left-1">
        {day.getDate()} {day.toLocaleString('default', { weekday: 'short' })}
      </span>
    </div>
  );
}
