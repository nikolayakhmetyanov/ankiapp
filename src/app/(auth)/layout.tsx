import { Image } from '@nextui-org/react';

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <header className="flex justify-center pt-4 mb-10">
                <div className="flex flex-col items-center gap-1">
                    <Image isBlurred width={60} src="/logo.jpg" alt="NextUI Album Cover" className="rounded-full" />
                    <span>WordWise</span>
                </div>
            </header>
            <main className='mb-10'>
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">{children}</div>
                </div>
            </main>
            <footer>
                <div className="flex justify-center">© WordWise</div>
            </footer>
        </div>
    );
};

export default AuthLayout;
