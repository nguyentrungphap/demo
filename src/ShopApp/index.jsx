import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer/index";
import CarouselElement from "./layout/CarouselElement";
import CategoryElement from "./layout/CategoryElement";
import Product from "./components/Product";

function ShopApp() {
  return (
    <div>
      <Header />
      <div className="flex container mx-auto px-16">
        <div className="w-[40%]">
        <CategoryElement className ="w-[30%]"/>
        </div>
      <div className="w-[60%]">
      <CarouselElement className = 'w-[60%]'/>
      </div>
      </div>
      <div>
        <h3>Products</h3>
        <Product/>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default ShopApp;
