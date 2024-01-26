import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

interface Player {
  id: string;
  name: string;
  age: string;
  photo: string;
  nationality: string;
  flag: string;
  overall: number;
  potential: number;
  position: string;
  value: number;
  wage: number;
  preferred_foot: string;
  work_rate: string;
  body_type: string;
  international_reputation: string;
  skill_moves: string;
  weak_foot: string;
  height: number;
  weight: number;
}

interface CardTransactionsProps {
  players: Player[];
}

export const MostOverallPlayersCard: React.FC<CardTransactionsProps> = ({ players }) => {
  // Sort players by overall rating in descending order
  const sortedPlayers = players.sort((a, b) => b.overall - a.overall);

  // Get the top 5 players
  const topPlayers = sortedPlayers.slice(0, 5);

  return (
    <Card className="bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              Top 5 Overall Players
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {topPlayers.map((player) => (
            <div key={player.id} className="grid grid-cols-4 w-full">
              <div className="w-full">
                <Avatar isBordered color="secondary" src={player.photo} />
              </div>

              <span className="text-default-900 font-semibold">{player.name}</span>
              <div>
                <span className="text-success text-xs">{player.overall}</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">{player.position}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
