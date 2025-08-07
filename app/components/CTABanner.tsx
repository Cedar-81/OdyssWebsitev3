import Image from "next/image";
import Olumirin from "@/public/olumirin.png";

export default function CTABanner() {
  return (
    <section className="w-full flex justify-center lg:mb-[10rem] items-center text-white h-[70vh] lg:h-[50vh] relative lg:rounded-2xl overflow-clip">
      <h2 className="absolute text-white right-5 lg:right-10 font-bold top-5 lg:top-10 z-10">
        OLUMIRIN WATERFALLS
      </h2>
      <Image
        src={Olumirin}
        className="absolute h-full object-cover"
        alt={"Olumirin Waterfall"}
      />

      <div className="relative z-10 text-left lg:text-center px-4 lg:px-0">
        <h3 className="text-sm lg:text-lg font-medium">
          Let us help you craft the experiences that tell your story.{" "}
          <span className="text-brand font-bold">Do it for the plot.</span>
        </h3>
        <h2 className="text-3xl lg:text-4xl font-bold">
          If we are the story you are the <br className="hidden lg:block" />
          storyteller
        </h2>
        <a href="#waitlist"><button className="px-10 py-3 mt-4 text-xs lg:text-sm rounded-xl lg:w-[20rem] lg:min-w-max font-semibold mx-auto text-white bg-brand">
          Get 50% off your first Playbook with {`"Early Access"`} 
        </button></a>
      </div>
    </section>
  );
}
