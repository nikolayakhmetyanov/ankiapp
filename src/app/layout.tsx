import type { Metadata } from 'next';
import { ReactNode } from 'react';
import classNames from 'classnames';
import '@/app/tailwind.css';
import { Providers } from '@/app/Providers';

export const metadata: Metadata = {
    title: 'WordWise',
};

import { Playfair_Display, Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--poppins',
});

const playfair = Playfair_Display({ weight: ['400', '500'], subsets: ['latin'], variable: '--playfair' });

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru" className={`${poppins.variable} ${playfair.variable} dark text-foreground bg-background`}>
            <body className={classNames(poppins.className)}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
