import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
  return (
    <div className="page-container">
      <Header />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
