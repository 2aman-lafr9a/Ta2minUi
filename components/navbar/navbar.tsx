import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";
import { GithubIcon } from "../icons/navbar/github-icon";
import { SupportIcon } from "../icons/navbar/support-icon";
import { SearchIcon } from "../icons/searchicon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { usePathname } from "next/navigation";
interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const pathname = usePathname();
  const isAuthRoute = () => {
    return (
      pathname === "/auth/signin" ||
      pathname === "/auth/signup/teammanager" ||
      pathname === "/auth/signup/agency"
    );
  };


  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {
          isAuthRoute() ? null : (

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
         
  
          <NavbarContent    justify="end" >
          <NotificationsDropdown />
            <UserDropdown />
          </NavbarContent>
      </Navbar>
          )
        }

  

      {children}
    </div>
  );
};
