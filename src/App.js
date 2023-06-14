import Banner from "./blog/Banner/Banner";
import Benifits from "./blog/Benifits/Benifits";
import Marketing from "./blog/Marketing/Marketing";
import Products from "./blog/Products/Products";
import Reviews from "./blog/Reviews/Reviews";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Benifits/>
        <Products/>
        <Reviews/>
        <Marketing/>
        <Footer/>
    </div>
  );
}

export default App;
