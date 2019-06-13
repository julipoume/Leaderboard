import React from "react";
import { Typography } from "@material-ui/core";
// Components
import LeaderBoardTable from "./components/Table";

const LeaderBoard = () => {
  const users = [
    { rank: 9, points: 123, name: "Lucia", age: 28 },
    { rank: 4, points: 982, name: "Juan", age: 32 },
    { rank: 1, points: 576, name: "Fermin", age: 25 },
    { rank: 2, points: 123, name: "Malena", age: 21 },
    { rank: 5, points: 987, name: "Julia", age: 43 },
    { rank: 3, points: 123, name: "Ana", age: 33 },
    { rank: 6, points: 646, name: "Victoria", age: 29 },
    { rank: 7, points: 566, name: "Rosita", age: 39 }
  ];
  return (
    <div>
      <Typography variant="h4" className="title">
        Leaderboard
      </Typography>
      <LeaderBoardTable users={users} />
    </div>
  );
};

export default LeaderBoard;
