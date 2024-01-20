import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import {HomeCard} from './homeCard';
export const CardBalance1 = () => {
  const teamData = {
    teamName: "Awesome Team",
    totalPlayers: 20,
    totalWins: 15,
    totalLosses: 5,
    vipMembers: 8,
  };

  // Header content
  const headerContent = (
    <div className="flex gap-2.5">
      {/* Omitted team icon for simplicity */}

      <div className="flex flex-col">
        <span className="text-white">{teamData.teamName}</span>
        <span className="text-white text-xs">
          {teamData.totalPlayers} Players
        </span>
      </div>
    </div>
  );

  // Body content
  const bodyContent = (
    <>
      <div className="flex gap-2.5 py-2 items-center">
        {/* Display total wins and losses */}
        <span className="text-white text-xl font-semibold">
          Wins: {teamData.totalWins}
        </span>
        <span className="text-white text-xs">
          Losses: {teamData.totalLosses}
        </span>
      </div>
      <div className="flex items-center gap-6">
        {/* Display VIP members */}
        <div>
          <div>
            <span className="text-xs text-white">VIP Members</span>
          </div>
          <span className="font-semibold text-white text-xs">
            {teamData.vipMembers}
          </span>
        </div>
      </div>
    </>
  );

  // Footer content (optional)
  const footerContent = null; // You can customize the footer if needed


  return (

   <HomeCard header={headerContent} body={bodyContent} footer={footerContent} />
       
  );
};
