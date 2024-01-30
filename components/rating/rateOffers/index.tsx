"use client";
import Link from "next/link";
import React from "react";

import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/components/icons/breadcrumb/users-icon";

import OffersGridForInput from "@/components/offers/offersList/offersGridForInput";


export const RateOffers = () => {
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
      <h3 className="text-xl font-semibold">
        All Offers assigned to your players
      </h3>
      <h4>Pleas give your rating</h4>
      <div className="flex justify-end flex-wrap gap-4 items-center"></div>
      <div className="max-w-[95rem] mx-auto w-full">
        <OffersGridForInput />
      </div>
    </div>
  );
};
