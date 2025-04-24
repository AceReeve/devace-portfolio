"use client";

import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import Logo from "./Logo";

type NavBarProps = {
    settings: Content.SettingsDocument;
}

export default async function NavBar({ settings }: NavBarProps) {
const client = createClient();
  const setting = await client.getSingle("settings");
  return (
    <nav className="md-:py-6 px-6 py-4 md:px-6" aria-label="Nav">
        <div className="mx-auto max-wl-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center flex">
        <Logo />
            <ul className='flex gap-6'>
                {setting.data.navigation.map((item) => {
                    if (item.cta_button) {
                        return (
                    <li key={item.label}>
                        <ButtonLink field={item.link}>
                            {item.label}
                        </ButtonLink>
                    </li>
                        );
                    }
                    return (
                        <li key={item.label}>
                            <PrismicLink field={item.link} className='inline-flex min-h-11 items-center'>
                                {item.label}
                            </PrismicLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    </nav>
  )
}
