import AppStyled from "../components/AppStyled";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <>
      <AppStyled>
        <Header />
        {children}
        <Footer />
      </AppStyled>
    </>
  );
}

export default DefaultLayout;
