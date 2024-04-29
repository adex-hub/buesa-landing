import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Departments from "./components/Departments";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="mt-0">
      <section className="bg-buesa-peach m-4 p-3 sm:p-5 sm:m-5 lg:m-8 lg:p-8 rounded-3xl">
        <Header />
        <Hero />
      </section>
      <KeyFeatures />
      <Departments />
      <Announcement />
      <Footer />
    </div>
  );
}
