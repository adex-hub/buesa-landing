import Button from "./Button";

function Hero() {
  return (
    <div className="py-20 w-[85%] sm:w-[55%] lg:w-full">
      <p className="capitalize text-buesa-black text-[32px] md:text-[40px] lg:text-[64px] font-semibold sm:font-bold">
        where knowledge
        <br />
        <span className="flex">
          meets&nbsp;
          <span className="text-buesa-red block">
            convenience
            <img
              src="underline.svg"
              className="-translate-y-3 absolute -translate-x-16 lg:-translate-x-0 scale-[.65] lg:scale-100 hidden md:flex"
              alt="stylized-underlining"
            />
          </span>
        </span>
      </p>
      <p className="my-5 md:my-8 text-buesa-grey">
        Simplify Your Academic Journey with Seamless Resource Access
      </p>
      <Button />
    </div>
  );
}

export default Hero;
