import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="px-5 py-9 sm:px-20 sm:py-12 w-full bg-footer-black text-[#FFFBFB] grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-20">
      {/* #1 */}
      <div className="flex items-start flex-col order-1 gap-[40px]">
        <div className="flex gap-3">
          <img src="buesa-logo.webp" width={48} height={48} alt="buesa-logo" />
          <img src="busa-logo.webp" width={48} height={48} alt="buesa-logo" />
        </div>
        {/* text */}
        <div className="flex flex-col gap-2">
          <p className="text-xl">About</p>
          <p className="text-[#B2B3B4]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia
          </p>
        </div>
      </div>

      {/* #2 */}
      <div className="flex flex-col justify-between order-1 lg:order-2 lg:text-center">
        <ul className="flex flex-col lg:flex-row justify-between gap-2 py-6 lg:py-0">
          <li className="lg:underline">Home</li>
          <li className="lg:underline">Announcement</li>
          <li className="lg:underline">Feedback</li>
        </ul>
        <p className="hidden lg:flex mx-auto">Copyright &copy; 2024</p>
      </div>

      {/* #3 */}
      <div className="flex gap-7 justify-start lg:justify-end order-3">
        <FaInstagram size={24} />
        <FaXTwitter size={24} />
        <CiLinkedin size={24} />
      </div>
      <p className="flex text-center order-4 pt-6 lg:hidden text-[#B2B3B4]">
        Copyright &copy; 2024
      </p>
    </div>
  );
}

export default Footer;
