import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

const insuranceAssignments = [
  {
    playerName: "Lionel Messi",
    playerPicture: "https://i.pravatar.cc/150?u=lionel-messi",
    insuranceAmount: "4500 USD",
    assignmentDate: "9/20/2021",
  },
  {
    playerName: "Cristiano Ronaldo",
    playerPicture: "https://i.pravatar.cc/150?u=cristiano-ronaldo",
    insuranceAmount: "4500 USD",
    assignmentDate: "9/20/2021",
  },
  {
    playerName: "Neymar Jr",
    playerPicture: "https://i.pravatar.cc/150?u=neymar-jr",
    insuranceAmount: "4500 USD",
    assignmentDate: "9/20/2021",
  },
  {
    playerName: "Kevin De Bruyne",
    playerPicture: "https://i.pravatar.cc/150?u=kevin-de-bruyne",
    insuranceAmount: "4500 USD",
    assignmentDate: "9/20/2021",
  },
  {
    playerName: "Robert Lewandowski",
    playerPicture: "https://i.pravatar.cc/150?u=robert-lewandowski",
    insuranceAmount: "4500 USD",
    assignmentDate: "9/20/2021",
  },
];


export const CardTransactions  = () => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              Latest Insurance Assignments
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {insuranceAssignments.map((assignment) => (
            <div key={assignment.playerName} className="grid grid-cols-4 w-full">
              <div className="w-full">
                <Avatar
                  isBordered
                  color="secondary"
                  src={assignment.playerPicture}
                />
              </div>

              <span className="text-default-900 font-semibold">
                {assignment.playerName}
              </span>
              <div>
                <span className="text-success text-xs">
                  {assignment.insuranceAmount}
                </span>
              </div>
              <div>
                <span className="text-default-500 text-xs">
                  {assignment.assignmentDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
