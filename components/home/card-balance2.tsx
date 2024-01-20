import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export const CardBalance2  = () => {
  const healthData = {
    insuranceName: "Health Shield",
    totalEnrollees: 2400,
    totalClaims: 11930,
    totalPremium: 12138,
    vipMembers: 150,
  };

  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          {/* Omitted icon for simplicity */}

          <div className="flex flex-col">
            <span className="text-default-900">{healthData.insuranceName}</span>
            <span className="text-default-900 text-xs">+{healthData.totalEnrollees} People</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          {/* Display total premium */}
          <span className="text-default-900 text-xl font-semibold">
            ${healthData.totalPremium}
          </span>
          {/* Display percentage change */}
          <span className="text-danger text-xs">- 4.5%</span>
        </div>
        <div className="flex items-center gap-6">
          {/* Display total claims */}
          <div>
            <div>
              <span className="font-semibold text-success-600 text-xs">
                {"↓"}
              </span>
              <span className="text-xs">{healthData.totalClaims}</span>
            </div>
            <span className="text-default-900 text-xs">USD</span>
          </div>

          {/* Display VIP members */}
          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"⭐"}</span>
              <span className="text-xs">{healthData.vipMembers}</span>
            </div>
            <span className="text-default-900 text-xs">VIP</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
