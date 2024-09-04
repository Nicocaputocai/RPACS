import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Discount from "./components/Discount";
import HappyCustomer from "./components/HappyCustomer";
import About from "./components/About";
import Footer from "./components/Footer";
import { Collections } from "./components/Collections";

export default function App() {
  return (
    <>
      <Menu />
      <Hero />
      <Collections />
      <Discount />
      <HappyCustomer />
      <About />
      <Footer />
    </>
  );
}