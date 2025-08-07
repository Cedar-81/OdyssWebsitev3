import Image from "next/image";
import PlaybookImage from "@/public/plan.png";
import DiscountImage from "@/public/discount.png";
import WalletImage from "@/public/wallet.png";

export default function Playbook() {
  return (
    <section className="space-y-10 lg:space-y-[10rem] px-8 lg:px-0">
      <div className="flex flex-col text-center gap-2 justify-between items-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Curate the <span className="text-brand">Playbook</span> of your
          <br className="hidden lg:block" /> Adventure
        </h2>
        <p className="text-sm lg:text-base lg:w-1/3">
          Our Playbooks are planning dashboards with all you need to get started
          on structuring the perfect getaway.
        </p>
      </div>

      <div className="space-y-20 lg:space-y-[10rem] lg:px-[3rem]">
        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row w-full gap-6 justify-between items-center">
            <div className="">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                <span className="text-brand">Under-stress</span> and cut
                planning time
              </h3>
              <p className="text-xs lg:text-base lg:w-2/3 font-medium">
                With a hybrid Human + AI system, we’ve reimagined how you plan
                your next adventure. Less stress, more discovery.
              </p>
            </div>
            <button className="px-10 py-3 rounded-xl w-full text-xs lg:text-base lg:w-[20rem] lg:min-w-max text-white bg-black">
              Plan your next adventure in{" "}
              <span className="text-brand">{`“minutes"`}</span>
            </button>
          </div>

          <Image
            className="mx-auto w-[38rem]"
            src={PlaybookImage}
            alt="ai playbook planner"
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-6 justify-between items-center">
          <Image
            className="mx-auto w-[38rem]"
            src={DiscountImage}
            alt="discounted reservation"
          />

          <div className="flex flex-col space-y-6 w-full justify-between lg:items-end ">
            <div className="space-y-1 lg:text-right flex flex-col lg:justify-end lg:items-end">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Experience <span className="text-brand">more</span> for less
              </h3>
              <p className="lg:w-2/3 text-xs lg:text-base font-medium lg:text-right">
                We are building strategic partnerships with top airlines,
                hotels, and more so you can save on every booking and enjoy
                curated travel perks.
              </p>
            </div>
            <button className="px-10 py-3 rounded-xl text-xs lg:text-base lg:w-[20rem] lg:min-w-max text-white bg-black">
              Be the first to access exclusive travel deals{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          <div className="flex flex-col space-y-6 w-full lg:mt-10">
            <div className="space-y-1 flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                <span className="text-brand">Lavish,</span> not waste
              </h3>
              <p className="text-xs lg:text-base lg:w-2/3 font-medium">
                Our wallet—well integrated into your travel budget—helps you
                avoid overspending while still enjoying every moment. Lavish
                with intention, not regret.
              </p>
            </div>
            <button className="text-xs lg:text-base px-10 py-3 rounded-xl lg:w-[20rem] lg:min-w-max text-white bg-black">
              Get more from your travel budget
            </button>
          </div>

          <Image
            className="mx-auto w-[38rem] mt-10 lg:mt-0"
            src={WalletImage}
            alt="wallet"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-32 lg:mt-0 justify-center text-center space-y-6">
        <div className="relative space-y-3">
          <div className="relative w-max mx-auto">
            <p className="absolute bottom-6 text-xl text-brand font-bold left-12">
              N3000
            </p>
            <p className="font-bold text-xl">N6000</p>
            <div className="relative bottom-4 mx-auto h-1 w-[6em] bg-black" />
          </div>

          <h3 className="font-bold text-3xl lg:text-4xl lg:w-2/3 mx-auto">
            Get 50% off your first Playbook as an
            <span className="text-brand"> “Early Bird”</span>
          </h3>
        </div>

        <button className="px-10 py-3 text-xs lg:text-base rounded-xl lg:w-[20rem] lg:min-w-max font-semibold mx-auto text-white bg-black">
          Get 50% off your first Playbook with{" "}
          <span className="text-brand">{`"Early Access"`}</span>
        </button>
      </div>
    </section>
  );
}
