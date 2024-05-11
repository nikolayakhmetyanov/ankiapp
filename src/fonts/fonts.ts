import { Playfair_Display, Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

const playfair = Playfair_Display({ weight: ['400', '500'], subsets: ['latin'] });

export { poppins, playfair };
