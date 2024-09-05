import AppStyled from "../components/AppStyled";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({children}: DefaultLayoutProps) {
  return <AppStyled>{children}</AppStyled>;
}

export default DefaultLayout;
