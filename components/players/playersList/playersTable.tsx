import React, { useState } from "react";
import { Suspense } from "react";
import { DeleteIcon } from "@/components/icons/table/delete-icon";
import { EditIcon } from "@/components/icons/table/edit-icon";
import { EyeIcon } from "@/components/icons/table/eye-icon";
import { AddPlayer } from "@/components/players/add-player";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  User,
  Pagination,
  Selection,
  ChipProps,
  Tooltip,
  SortDescriptor,
} from "@nextui-org/react";
import PlusIcon from "@/components/icons/tailwindCss//PlusIcon";
import VerticalDotsIcon from "@/components/icons/tailwindCss/VerticalDotsIcon";
import ChevronDownIcon from "@/components/icons/tailwindCss/ChevronDownIcon";
import SearchIcon from "@/components/icons/tailwindCss/SearchIcon";
import {columns, players, statusOptions} from "./data";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Spinner } from "@nextui-org/react";
import toast from "react-hot-toast";

const GET_PLAYERS = gql`
  query GetPlayers($team_id: String ,$page: Int!, $limit: Int!) {
    getPlayers(team_id: $team_id ,page: $page, limit: $limit) {
      id
      name
      age
      photo
      nationality
      flag
      overall
      potential
      position
      value
      wage
      preferred_foot
      work_rate
      body_type
      international_reputation
      skill_moves
      weak_foot
      height
      weight
    }
  }
`;

const DELETE_PLAYER = gql`
  mutation DeletePlayer($id: ID!) {
    deletePlayer(id: $id) {
      id
    }
  }
`;

const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "position",
  "flag",
  "overall",
  "actions",
];
const playersTmp = [
  {
    id: "1",
    name: "Lionel Messi",
    age: "34",
    photo: "https://i.pravatar.cc/150?u=lionel-messi",
    nationality: "Argentina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png",
    overall: 94,
    potential: 94,
    position: "Forward",
    value: 150000000,
    wage: 750000,
    preferred_foot: "Left",
    work_rate: "Medium/High",
    body_type: "Lean",
    international_reputation: "5",
    skill_moves: "4",
    weak_foot: "4",
    height: 170,
    weight: 72,
  },
  {
    id: "2",
    name: "Cristiano Ronaldo",
    age: "36",
    photo: "https://i.pravatar.cc/150?u=cristiano-ronaldo",
    nationality: "Portugal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
    overall: 92,
    potential: 92,
    position: "Forward",
    value: 120000000,
    wage: 800000,
    preferred_foot: "Right",
    work_rate: "High/High",
    body_type: "Athletic",
    international_reputation: "5",
    skill_moves: "5",
    weak_foot: "4",
    height: 187,
    weight: 83,
  },
  {
    id: "3",
    name: "Neymar Jr",
    age: "29",
    photo: "https://i.pravatar.cc/150?u=neymar-jr",
    nationality: "Brazil",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
    overall: 91,
    potential: 92,
    position: "Forward",
    value: 110000000,
    wage: 600000,
    preferred_foot: "Right",
    work_rate: "High/Medium",
    body_type: "Lean",
    international_reputation: "5",
    skill_moves: "5",
    weak_foot: "5",
    height: 175,
    weight: 68,
  },
  {
    id: "4",
    name: "Kevin De Bruyne",
    age: "30",
    photo: "https://i.pravatar.cc/150?u=kevin-de-bruyne",
    nationality: "Belgium",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1280px-Flag_of_Belgium.svg.png",
    overall: 91,
    potential: 91,
    position: "Midfielder",
    value: 120000000,
    wage: 600000,
    preferred_foot: "Right",
    work_rate: "High/High",
    body_type: "Normal",
    international_reputation: "4",
    skill_moves: "4",
    weak_foot: "5",
    height: 181,
    weight: 68,
  },
  {
    id: "5",
    name: "Robert Lewandowski",
    age: "33",
    photo: "https://i.pravatar.cc/150?u=robert-lewandowski",
    nationality: "Poland",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png",
    overall: 92,
    potential: 92,
    position: "Forward",
    value: 100000000,
    wage: 550000,
    preferred_foot: "Right",
    work_rate: "High/High",
    body_type: "Stocky",
    international_reputation: "4",
    skill_moves: "4",
    weak_foot: "4",
    height: 184,
    weight: 80,
  },
  {
    id: "6",
    name: "Virgil van Dijk",
    age: "30",
    photo: "https://i.pravatar.cc/150?u=virgil-van-dijk",
    nationality: "Netherlands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png",
    overall: 90,
    potential: 90,
    position: "Defender",
    value: 80000000,
    wage: 500000,
    preferred_foot: "Right",
    work_rate: "Medium/High",
    body_type: "Normal",
    international_reputation: "4",
    skill_moves: "2",
    weak_foot: "3",
    height: 193,
    weight: 92,
  },
  {
    id: "7",
    name: "Mohamed Salah",
    age: "29",
    photo: "https://i.pravatar.cc/150?u=mohamed-salah",
    nationality: "Egypt",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1280px-Flag_of_Egypt.svg.png",
    overall: 90,
    potential: 90,
    position: "Forward",
    value: 100000000,
    wage: 550000,
    preferred_foot: "Left",
    work_rate: "High/Medium",
    body_type: "Lean",
    international_reputation: "4",
    skill_moves: "4",
    weak_foot: "3",
    height: 175,
    weight: 71,
  },
  {
    id: "8",
    name: "Kylian Mbappe",
    age: "23",
    photo: "https://i.pravatar.cc/150?u=kylian-mbappe",
    nationality: "France",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
    overall: 91,
    potential: 95,
    position: "Forward",
    value: 130000000,
    wage: 700000,
    preferred_foot: "Right",
    work_rate: "High/Low",
    body_type: "Lean",
    international_reputation: "5",
    skill_moves: "5",
    weak_foot: "4",
    height: 178,
    weight: 73,
  },
  {
    id: "9",
    name: "Bruno Fernandes",
    age: "27",
    photo: "https://i.pravatar.cc/150?u=bruno-fernandes",
    nationality: "Portugal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
    overall: 88,
    potential: 90,
    position: "Midfielder",
    value: 90000000,
    wage: 500000,
    preferred_foot: "Right",
    work_rate: "High/High",
    body_type: "Normal",
    international_reputation: "4",
    skill_moves: "4",
    weak_foot: "4",
    height: 179,
    weight: 69,
  },
  {
    id: "10",
    name: "Sergio Ramos",
    age: "35",
    photo: "https://i.pravatar.cc/150?u=sergio-ramos",
    nationality: "Spain",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png",
    overall: 88,
    potential: 88,
    position: "Defender",
    value: 60000000,
    wage: 450000,
    preferred_foot: "Right",
    work_rate: "Medium/High",
    body_type: "Stocky",
    international_reputation: "5",
    skill_moves: "3",
    weak_foot: "3",
    height: 184,
    weight: 82,
  },
  {
    id: "11",
    name: "Alphonso Davies",
    age: "21",
    photo: "https://i.pravatar.cc/150?u=alphonso-davies",
    nationality: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
    overall: 86,
    potential: 92,
    position: "Defender",
    value: 75000000,
    wage: 350000,
    preferred_foot: "Left",
    work_rate: "High/High",
    body_type: "Lean",
    international_reputation: "4",
    skill_moves: "4",
    weak_foot: "3",
    height: 183,
    weight: 72,
  },
  {
    id: "12",
    name: "Erling Haaland",
    age: "21",
    photo: "https://i.pravatar.cc/150?u=erling-haaland",
    nationality: "Norway",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png",
    overall: 87,
    potential: 92,
    position: "Forward",
    value: 90000000,
    wage: 400000,
    preferred_foot: "Right",
    work_rate: "High/Low",
    body_type: "Lean",
    international_reputation: "4",
    skill_moves: "3",
    weak_foot: "4",
    height: 194,
    weight: 87,
  },
  // Add more players as needed
];
type Player = (typeof playersTmp)[0];

export default function PlayersTable() {

  const [players, setPlayers] = useState(playersTmp);
  const { loading, error, data } = useQuery(GET_PLAYERS, {
    variables: {
      team_id: "",
      page: 1,
      limit: 0,
    },
  });
  const [deletePlayer] = useMutation(DELETE_PLAYER);

  if (data) {
    console.log(data);
    setPlayers(data)
  }

  const handleDelete = async (id: string) => {
    try {
      await deletePlayer({ variables: { id } });
      toast.success(`Player ${id} deleted successfully`);
        ///slice the array to remove the deleted player
      const newPlayers = players.filter((player) => player.id !== id);
      setPlayers(newPlayers);
    } catch (e) {
      toast.error(`An error occurred while deleting player ${id}`);
    }
  };

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "overall",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredPlayers = [...players];

    if (hasSearchFilter) {
      filteredPlayers = filteredPlayers.filter((player) =>
        player.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredPlayers;
  }, [players, hasSearchFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Player, b: Player) => {
      const first = a[sortDescriptor.column as keyof Player];
      const second = b[sortDescriptor.column as keyof Player];

      if (typeof first === "number" && typeof second === "number") {
        const cmp = first - second;
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      } else if (typeof first === "string" && typeof second === "string") {
        const cmp = first.localeCompare(second);
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      } else {
        return 0; // Unable to compare, leave items in their current order
      }
    });
  }, [items, sortDescriptor.column, sortDescriptor.direction]);

  const renderCell = React.useCallback(
    (player: Player, columnKey: React.Key) => {
      const cellValue = player[columnKey as keyof Player];

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
        case "position":
          return cellValue;
        case "flag":
          return (
            <User
              avatarProps={{
                src: player.flag,
              }}
              name={player.nationality}
            ></User>
          );
        case "overall":
          return cellValue;
        case "actions":
          return (
            <div className="flex items-center gap-4 ">
              {/* <div>
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
              </div> */}
              <div>
                <Tooltip content="Delete player" color="danger">
                  <button onClick={() => handleDelete(player.id)}>
                    <DeleteIcon size={20} fill="#FF0080" />
                  </button>
                </Tooltip>
              </div>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Button color="primary">
              <AddPlayer />
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {players.length} players
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, players.length, onRowsPerPageChange, onClear]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-around items-center">
        <Button
          isDisabled={pages === 1}
          size="sm"
          variant="flat"
          onPress={onPreviousPage}
        >
          Previous
        </Button>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <Button
          isDisabled={pages === 1}
          size="sm"
          variant="flat"
          onPress={onNextPage}
        >
          Next
        </Button>
      </div>
    );
  }, [page, pages, onPreviousPage, onNextPage]);

  return (
    <div>
      {loading ? (
        <Spinner
          className="flex justify-center items-center"
          color="primary"
          size="lg"
        />
      ) : (
        <Table
          aria-label="Players Table"
          isHeaderSticky
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          selectedKeys={selectedKeys}
          sortDescriptor={sortDescriptor}
          topContent={topContent}
          topContentPlacement="outside"
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={headerColumns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                allowsSorting={column.sortable}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody
            emptyContent={
              error
                ? "An error Occured while fetching users"
                : "No players found"
            }
            items={sortedItems}
            isLoading={true}
          >
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
