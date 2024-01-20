import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { players } from "./data";

interface Props {
  player: typeof players[number];
  columnKey: string | React.Key;
}

export const RenderCell = ({ player, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = player[columnKey];
  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{
            src: player.photo,
          }}
          name={cellValue}
        >
          {player.nationality}
        </User>
      );
    case "age":
      return <span>{cellValue}</span>;
    case "overall":
      return <span> {cellValue}</span>;
    case "potential":
      return <span>{cellValue}</span>;
    case "position":
      return <span>{cellValue}</span>;
      case "flag":
        return (
          <User
            avatarProps={{
              src: player.flag,
            }}
            name={player.nationality}
          >   
          </User>
        );
    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <button onClick={() => console.log("View player", player.id)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Edit player" color="secondary">
              <button onClick={() => console.log("Edit player", player.id)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              content="Delete player"
              color="danger"
              onClick={() => console.log("Delete player", player.id)}
            >
              <button>
                <DeleteIcon size={20} fill="#FF0080" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};
