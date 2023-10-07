// components/layout/defaultNavItems.tsx
import React from "react";
import { IconHome2, IconPlaneDeparture, IconPlaneInflight, IconPlaneArrival } from '@tabler/icons-react';
import { NavItem } from "./layout/Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Flight Information",
    href: "/",
    icon: <IconHome2 className="w-6 h-6" />,
  },
  {
    label: "Departure",
    href: "/takeoff",
    icon: <IconPlaneDeparture className="w-6 h-6" />,
  },
  {
    label: "Cruise",
    href: "/cruise",
    icon: <IconPlaneInflight className="w-6 h-6" />,
  },
  {
    label: "Descent",
    href: "/descent",
    icon: <IconPlaneArrival className="w-6 h-6" />,
  },
];
