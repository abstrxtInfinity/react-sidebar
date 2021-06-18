import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "About",
        path: "/about",
        icon: <MdIcons.MdPerson />,
        cName: "nav-text",
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <AiIcons.AiFillPhone />,
        cName: "nav-text",
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
];
