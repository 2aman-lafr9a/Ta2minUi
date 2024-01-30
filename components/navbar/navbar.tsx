import { Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";

import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { usePathname } from "next/navigation";
import { DarkModeSwitcher } from "../darkModeSwitcher";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const pathname = usePathname();
  const isAuthRoute = () => {
    return (
      pathname === "/auth/signin" ||
      pathname === "/auth/signup/teammanager" ||
      pathname === "/auth/signup/agency" ||
      pathname === "/auth"
    );
  };

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {isAuthRoute() ? null : (
        <Navbar
          isBordered
          className="w-full"
          classNames={{
            wrapper: "w-full max-w-full",
          }}
        >
          <NavbarContent className="md:hidden">
            <BurguerButton />
          </NavbarContent>

          <NavbarContent justify="start">
            <DarkModeSwitcher />
          </NavbarContent>
          <NavbarContent justify="end">
            {/* <NotificationsDropdown /> */}
            <UserDropdown />
          </NavbarContent>
        </Navbar>
      )}

      {children}
    </div>
  );
};
