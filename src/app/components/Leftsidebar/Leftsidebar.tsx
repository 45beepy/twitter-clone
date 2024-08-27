import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsTwitter, BsEnvelope, BsThreeDots } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  { title: "Twitter", icon: BsTwitter },
  { title: "Home", icon: BiHomeCircle },
  { title: "Explore", icon: HiOutlineHashtag },
  { title: "Notifications", icon: BsBell },
  { title: "Messages", icon: BsEnvelope },
  { title: "Bookmarks", icon: BsBookmark },
  { title: "Profile", icon: BiUser },
];

const Leftsidebar = () => {
  const user = {
    full_name: "John Doe",
    username: "johndoe",
  };

  return (
    <section className="w-[23%] sticky top-0 xl:flex flex-col items-stretch h-screen hidden">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.title}
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
            href={
              item.title.toLocaleLowerCase() === "home"
                ? "/"
                : item.title.toLocaleLowerCase() === "profile"
                ? user.username || "#"
                : `/${item.title.toLowerCase()}`
            }
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold rounded-full px-4 py-2 w-48">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">{user.full_name}</div>
            <div>@{user.username}</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default Leftsidebar;
