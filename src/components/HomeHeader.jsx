import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5 ">
      <div className="flex gap-4   max-w-[100px] ">
        <a
          className="text-black/[0.87] text-[13px] hover:underline cursor-pointer"
          href="https://mail.google.com/mail/u/0/#inbox"
        >
          Gmail
        </a>
        <a
          className="text-black/[0.87] text-[13px] hover:underline cursor-pointer"
          href="https://images.google.com/"
        >
          Images
        </a>
      </div>

      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
