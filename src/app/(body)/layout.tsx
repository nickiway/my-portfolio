'use client';

import clsx from 'clsx';
import { Navigation } from 'components/Navigation';

import { poppins, varelaRound } from 'utils/fonts';
import { itemsList } from 'components/Navigation/itemsList';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed z-10 flex w-full p-10">
        <div
          className={clsx(
            varelaRound.className,
            'text-white shadow-black uppercase text-2xl',
          )}
        >
          Nicki.Way
        </div>

        <Navigation
          className={clsx(
            'flex gap-10 flex-row-reverse w-full',
            poppins.className,
          )}
          itemsList={itemsList}
        />
      </header>

      {children}
    </>
  );
}
