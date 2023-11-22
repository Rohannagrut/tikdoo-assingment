import { FaMicrophoneSlash } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { LuScreenShare } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const videoIcons = [
  <IoVideocamOutline />,
  <FaMicrophone />,
  <LuScreenShare />,
  <IoChatboxEllipsesOutline />,
];

const anotherSlidebar = () => {
  return (
    <div className="w-1/5 p-5">
      <div className="relative rounded shadow-md">
        <img
          src="https://media.istockphoto.com/id/1471882420/photo/entrepreneur-is-running-her-online-business.jpg?s=612x612&w=is&k=20&c=2GZVcj5c5rboZAYmv2WSLZ3BoNKQBsEYBbeRVb-WiMY="
          alt="kid"
          className="rounded"
        />
        <div className="absolute top-4 right-4 bg-[#e2dcef] p-2 rounded-full shadow-md">
          <FaMicrophoneSlash />
        </div>
        <p className="absolute bottom-0 font-semibold text-[#7f64ba]  bg-[#e2dcef] px-2 py-1 rounded-sm">
          Ridha
        </p>
      </div>
      <div className="relative mt-6 rounded shadow-md">
        <img
          src="https://media.istockphoto.com/id/1288103838/photo/lady-sitting-at-desk-using-computer-and-waving-to-webcam.webp?s=2048x2048&w=is&k=20&c=Kit5mkMMMt-7MgcQTmU5TUArHyom4KnD6gP78uGh414="
          alt="kid"
          className="rounded"
        />
        <div className="absolute top-4 right-4 bg-[#e2dcef] p-2 rounded-full shadow-md">
          <BsSoundwave />
        </div>
        <p className="absolute bottom-0 font-semibold text-[#7f64ba]  bg-[#e2dcef] px-2 py-1 rounded-sm">
          Ms. Kaur
        </p>
      </div>
      <ul className="flex justify-around gap-2 items-center my-4 ">
        {videoIcons?.map((videoIcon, index) => (
          <li key={index} className="p-2 bg-[#e2dcef] rounded shadow-md">
            {videoIcon}
          </li>
        ))}
      </ul>
      <button className="text-center bg-red-400 text-white px-4 py-1 rounded mx-auto w-full shadow-md">
        Leave
      </button>
    </div>
  );
};

export default anotherSlidebar;
