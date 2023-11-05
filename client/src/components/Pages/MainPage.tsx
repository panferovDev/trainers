import React from 'react';
import AddTrainer from '../UI/AddTrainer';
import Calendar from '../widgets/Calendar';

export default function MainPage(): JSX.Element {
  return (
    <div className='flex flex-row gap-1 w-full'>
      <AddTrainer />
      <Calendar />
    </div>
  );
}
