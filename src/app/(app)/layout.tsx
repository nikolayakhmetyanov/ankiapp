import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default AppLayout;
