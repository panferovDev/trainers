import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <div className="container mx-auto">
      <div className='flex flex-col min-h-screen'>
        <Outlet />

        <div className="mt-auto w-full h-[100px] border-t border-t-orange-100" >
          <span className="text-xs">footer</span>
        </div>
      </div>
    </div>
  );
}
