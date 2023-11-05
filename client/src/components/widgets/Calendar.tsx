import React, { useMemo, useState } from 'react';
import { getMonthDays } from '../../utils/getMonthDays';
import OneDay from './OneDay';

export default function Calendar(): JSX.Element {
  const [date, setDate] = useState(new Date());
  const days = useMemo(() => getMonthDays(date), [date]);
  return (
    <div className="w-full flex flex-col">
      <div>
        <button
          type="button"
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}
          className="border border-orange-300 rounded-md px-2 py-1"
        >
          Prev
        </button>
        <span className="mx-2">{date.toLocaleString('default', { month: 'long' })}</span>
        <button
          type="button"
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}
          className="border border-orange-300 rounded-md px-2 py-1"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 w-full gap-1 mt-4">
        {days.map((day) => (
          <OneDay key={day.toISOString()} day={day} />
        ))}
      </div>
    </div>
  );
}
