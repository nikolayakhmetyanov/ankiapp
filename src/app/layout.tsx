import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { poppins } from '@/fonts/fonts';
import '../styles/layout.scss';
import { Providers } from '@/app/Providers';
import Header from '@/components/Header/Header';
import classNames from 'classnames';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'WordWise',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <Providers>
            <html lang="en">
                <body className={classNames(poppins.className)}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </Providers>
    );
}
