import React from 'react'
import { createClient } from "@/prismicio";
import Link from 'next/link';
import { PrismicLink } from '@prismicio/react';

export default async function Footer() {
  const client = createClient();
  const setting = await client.getSingle("settings");
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
        <Link href="/">
        Dev Ace
        </Link>
        <nav aria-label='Footer'>
            <ul className='flex gap-6'>
                {setting.data.navigation.map((item) => (
                    <li key={item.label}>
                        <PrismicLink field={item.link} className='inline-flex min-h-11 items-center'>
                            {item.label}
                        </PrismicLink>
                    </li>
                ))}
            </ul>
        </nav>
    </footer>
  )
}
