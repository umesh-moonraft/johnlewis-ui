import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
  return (
    <div className="page-container">
      <Header />
      <div class="page-content">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
