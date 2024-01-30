import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Divider, Tooltip } from "@nextui-org/react";
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
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { AddPlayer } from "@/components/players/add-player";

import { AddTeam } from "../teams/AddTeam";
import { AddOffer } from "../offers/addOffer";
import { PlusIcon } from "../icons/sidebar/plus-icon";
import { PlayersIcon } from "../icons/sidebar/players-icon";
import { ContractIcon } from "../icons/sidebar/contract-icon";
import { LogoutIcon } from "../icons/sidebar/logout-icon";
import { StarIcon } from "../icons/sidebar/star-icon";
import { useRouter } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();
  const Router = useRouter();
  const isAuthRoute = () => {
    return (
      pathname === "/auth/signin" ||
      pathname === "/auth/signup/teammanager" ||
      pathname === "/auth/signup/agency" ||
      pathname === "/auth"
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
          <div className={Sidebar.Header()}></div>
          <div className="flex flex-col justify-between h-full">
            <div className={Sidebar.Body()}>
              <motion.div
                style={{
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <SidebarItem
                  title="Home"
                  icon={<HomeIcon />}
                  isActive={pathname === "/"}
                  href="/"
                />
              </motion.div>
              <Divider
                style={{
                  margin: "20px 0px 40px 0px",
                }}
              />
              <SidebarMenu title="Main Menu">
                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <SidebarItem
                    isActive={pathname === "/players"}
                    title="Players"
                    icon={<PlayersIcon />}
                    href="players"
                  />
                </motion.div>
                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <SidebarItem
                    isActive={pathname === "/offers"}
                    title="Offers"
                    icon={<PaymentsIcon />}
                    href="offers"
                  />
                </motion.div>

                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <SidebarItem
                    isActive={pathname === "/contracts"}
                    title="contracts"
                    icon={<ContractIcon />}
                    href="contracts"
                  />
                </motion.div>
                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <SidebarItem
                    isActive={pathname === "/offers-rating"}
                    title="Rate Offers"
                    icon={<StarIcon />}
                    href="offers-rating"
                  />
                </motion.div>
                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <SidebarItem
                    isActive={pathname === "/recomendation"}
                    title="Recomendation"
                    icon={<FilterIcon />}
                    href="recomendation"
                  />
                </motion.div>
                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <SidebarItem
                    isActive={pathname === "/rr"}
                    title=""
                    icon={<PlusIcon />}
                    href=""
                    isButton={true}
                  >
                    <AddPlayer />
                  </SidebarItem>
                </motion.div>
                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <SidebarItem
                    isActive={pathname === "/rr"}
                    title=""
                    icon={<PlusIcon />}
                    href=""
                    isButton={true}
                  >
                    <AddOffer />
                  </SidebarItem>
                </motion.div>

                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <CollapseItems
                    icon={<BalanceIcon />}
                    items={["Signin", "TM Signup", "AG Signup"]}
                    hrefs={[
                      "/auth/signin",
                      "/auth/signup/teammanager",
                      "/auth/signup/agency",
                    ]}
                    title="Authentications"
                  />
                </motion.div>
              </SidebarMenu>
            </div>
            <div
              className={Sidebar.Footer()}
              onClick={() => Router.push("/auth")}
            >
              <Tooltip content={"LOGOUT"} color="danger">
                <motion.div
                  style={{
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.6 }}
                  whileTap={{ scale: 0.5 }}
                >
                  {/* Logout text in span with colore red and bold font  */}
                  <span className="text-red-500 font-bold">
                    <div className="flex justify-between">
                      <LogoutIcon /> &nbsp; LOGOUT
                    </div>
                  </span>
                </motion.div>
              </Tooltip>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
