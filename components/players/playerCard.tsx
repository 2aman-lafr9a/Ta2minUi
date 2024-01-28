import React from "react";
import { Avatar, Divider, User } from "@nextui-org/react";
import Image from 'next/image'

interface PlayerCardProps {
  player: {
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
  };
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700 m-7 flex justify-center ">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-row items-center pb-8">
        <div className="w-1/3 p-4">
          <Avatar
            src={player.photo}
            size="lg"
            style={{ width: "128px", height: "128px", marginBottom: "1rem" }}
          />
        </div>
        <div className="w-2/3 px-6 py-4">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {player.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {player.position}
          </span>
          <div className="flex items-center mt-2">
            <span className="text-gray-600 dark:text-gray-400 mr-2">Age:</span>
            <span>{player.age}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-gray-600 dark:text-gray-400 mr-2">
              Nationality:
            </span>
            <Image
              src={player.flag}
              alt={`${player.nationality} flag`}
              width={40} // Set the desired width
              height={25} // Set the desired height
            />
             <span> {`.  ${player.nationality} flag`} </span>
            
          </div>

          <Divider className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            {/* ... (remaining code remains the same) */}
            <div>
              <span className="text-gray-600 dark:text-gray-400">Overall:</span>
              <span>{player.overall}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">
                Potential:
              </span>
              <span>{player.potential}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Value:</span>
              <span>{player.value}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Wage:</span>
              <span>{player.wage}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">
                Preferred Foot:
              </span>
              <span>{player.preferred_foot}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">
                Work Rate:
              </span>
              <span>{player.work_rate}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">
                Body Type:
              </span>
              <span>{player.body_type}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">
                International Reputation:
              </span>
              <span>{player.international_reputation}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">
                Skill Moves:
              </span>
              <span>{player.skill_moves}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">
                Weak Foot:
              </span>
              <span>{player.weak_foot}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Height:</span>
              <span>{player.height}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Weight:</span>
              <span>{player.weight}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
