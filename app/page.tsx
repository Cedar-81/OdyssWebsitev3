import Banner from "./components/Banner";
import Nav from "./components/Navbar";
import Waitlist from "./components/Waitlist";
import Playbook from "./components/Playbook";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <div className="lg:px-[40px] space-y-[10rem]">
        <Banner />
        <Waitlist />
        <Playbook />
        <CTABanner />
      </div>
      <Footer />
    </main>
  );
}
