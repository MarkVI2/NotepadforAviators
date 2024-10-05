import React, { useState } from "react";
import { IconBrandVercel, IconSettings } from "@tabler/icons-react";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

type SidebarProps = {
  navItems?: NavItem[];
  onButtonClick?: (label: string) => void;
};

export type NavItem = {
  label: string;
  href: string; // Updated for proper Next.js routing
  icon: React.ReactNode;
};

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  color: "#bbadcd",
  paddingLeft: "1rem",
  "&:hover": {
    color: "#a69ed6",
  },
  "&.MuiIconButton-sizeLarge": {
    "&.MuiIconButton-label": {
      fontSize: "1rem",
    },
    textAlign: "center",
    paddingLeft: "1rem",
  },
})) as typeof IconButton;

const Sidebar: React.FC<SidebarProps> = ({ navItems = [], onButtonClick }) => {
    const router = useRouter();

    const handleClick = (label: string, href: string) => {
        onButtonClick?.(label);
        router.push(href);
    };

    return (
        <div className="w-14 bg-background-sidebar h-screen flex flex-col">
        <div className="p-4 bg-primary">
            <IconBrandVercel className="text-background-sidebar flex rounded-md items-center" />
        </div>
        <nav className="flex-1 items-center md:sticky top-0 md:top-16">
            <ul className="space-y-4 items-center rounded-md">
            {navItems.map((item, index) => (
                <li key={index}>
                <Tooltip
                    title={item.label}
                    placement="right"
                    enterDelay={0}
                    leaveDelay={0}
                    arrow
                >
                    <CustomIconButton
                    size="large"
                    color="primary"
                    onClick={() => handleClick(item.label, item.href)}
                    >
                    {item.icon}
                    </CustomIconButton>
                </Tooltip>
                </li>
            ))}
            </ul>
        </nav>
        <div className="mt-auto">
            <Tooltip title="Settings" placement="right">
            <CustomIconButton size="large" color="primary">
                <IconSettings />
            </CustomIconButton>
            </Tooltip>
        </div>
        </div>
    );
    };

export default Sidebar;
