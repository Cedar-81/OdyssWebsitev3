export default function Waitlist() {
  return (
    <section className="space-y-6 px-8 lg:px-0">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Don’t just travel become a <span className="text-brand">Tourist</span>
        </h2>
        <p className="lg:text-lg">
          From weddings to retreats, make every trip a tour to remember.
        </p>
      </div>

      <form action="" className="flex flex-col text-sm gap-5">
        <div className="flex flex-col lg:flex-row justify-center gap-6">
          <div className="border border-brand rounded-xl flex flex-col gap-1 px-3 py-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              className="outline-none w-[10rem]"
              placeholder="How do we address you?"
            />
          </div>
          <div className="border border-brand rounded-xl flex flex-col gap-1 px-3 py-2">
            <label htmlFor="lastname" className="text-sm font-semibold">
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              className="outline-none w-[10rem]"
              placeholder="What’s your surname?"
            />
          </div>
          <div className="border border-brand rounded-xl flex flex-col gap-1 px-3 py-2">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="outline-none w-[10rem]"
              placeholder="How do we reach you?"
            />
          </div>
        </div>
        <div className="flex gap-2 mx-auto font-semibold items-start lg:items-center">
          <input type="checkbox" className="mt-1 lg:mt-0" />
          <p>Subscribe to get newsletters and updates from us</p>
        </div>
        <button className="px-10 py-3 rounded-xl text-lg w-[20rem] mx-auto text-white bg-brand">
          Join the waitlist
        </button>
      </form>
    </section>
  );
}
