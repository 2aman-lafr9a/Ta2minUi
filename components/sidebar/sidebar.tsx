import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";

import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();
  const isAuthRoute = () => {
    return (
      pathname === "/auth/signin" ||
      pathname === "/auth/signup/teammanager" ||
      pathname === "/auth/signup/agency"
    );
  };
  return (

  
    <aside className="h-screen z-[202] sticky top-0">


            {collapsed ? (
              <div className={Sidebar.Overlay()} onClick={setCollapsed} />
            ) : null}
      

      {isAuthRoute() ? null : (
        
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
      
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/players"}
                title="Players"
                icon={<AccountsIcon />}
                href="players"
              />
             <SidebarItem
                isActive={pathname === "/offers"}
                title="Offers"
                icon={<PaymentsIcon />}
                href="offers"
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Signin", "TM Signup", "AG Signup"]}
                hrefs={["/auth/signin", "/auth/signup/teammanager", "/auth/signup/agency"]}
                title="Authentications"
              />
              
            </SidebarMenu>

          
          
          </div>
          {/* <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div> */}
        </div>
      </div>
      )
      }

      


    </aside>
  );
};
