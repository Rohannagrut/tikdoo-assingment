import { IoIosArrowBack } from "react-icons/io";
import { TbPhoneCall, TbPolaroidFilled } from "react-icons/tb";
import {
  MdChecklist,
  MdGraphicEq,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { SiGoogleclassroom, SiGraphql } from "react-icons/si";
import { FaChalkboard, FaTable } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { RiProfileFill, RiSlideshowLine, RiTodoFill } from "react-icons/ri";
import {
  IoDocumentsSharp,
  IoMenuOutline,
  MenuOutlined,
  BellOutlined,
  IoStatsChartSharp,
} from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import logo from "../assets/logo-black.png";
import logo1 from "../assets/logo-color.png";
import {
  BellAlertIcon,
  EyeIcon,
  TableCellsIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Badge, Statistic, message } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-10 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-gray-100 ">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg group">
                <img
                  src={logo1}
                  alt="Logo"
                  width={180}
                  height={15}
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2  rounded-lg group">
                <IoMenuOutline />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2   group">
                <BellAlertIcon count={"1"} />

                <Badge count={1}>
                  <i class="fa-solid fa-bell"></i>
                </Badge>
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2  group">
                <ClockCircleOutlined />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2  group">
                <RiTodoFill />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2   group">
                <EyeIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                {/* <span className="flex-1 ms-3 whitespace-nowrap">Users</span> */}
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2  rounded-lg   group">
                {/* <TableCellsIcon /> */}
                <IoStatsChartSharp />
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="flex mt-60 items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
          >
            <UserCircleIcon />
          </a>
        </div>
      </aside>
      {/* <h1 className="flex bg-slate-50">Hi how are you </h1> */}
    </div>
  );
};

export default Sidebar;
