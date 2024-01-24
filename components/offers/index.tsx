"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { DotsIcon } from "@/components/icons/accounts/dots-icon";
import { ExportIcon } from "@/components/icons/accounts/export-icon";
import { InfoIcon } from "@/components/icons/accounts/info-icon";
import { TrashIcon } from "@/components/icons/accounts/trash-icon";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/components/icons/breadcrumb/users-icon";
import { SettingsIcon } from "@/components/icons/sidebar/settings-icon";
import { TableWrapper } from "@/components/table/table";
 import { gql, useQuery} from "@apollo/client";
import PlayersTable from "@/components/players/playersList/playersTable";
import OffersGrid from "@/components/offers/offersList/offersGrid";
import {AddOffer} from "@/components/offers/addOffer";
 

export const Offers = () => {

    
  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Offers</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>List</span>
        </li>
      </ul>
      <h3 className="text-xl font-semibold">All Offers</h3>
      <div className="flex justify-end flex-wrap gap-4 items-center">
      <Button color="primary">
        <AddOffer />
        </Button>
      
      </div>
      <div className="max-w-[95rem] mx-auto w-full">


        <OffersGrid />


       </div>
    </div>
  );
};
