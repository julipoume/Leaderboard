import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

class LeaderBoardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    };
  }
  //to sort the table depending the specific field
  sortTable = (users, orderBy) => {
    let arg = users.sort((a, b) =>
      a[orderBy] > b[orderBy] ? 1 : b[orderBy] > a[orderBy] ? -1 : 0
    );
    console.log(arg);
    return arg;
  };
  handleSort = orderBy => {
    this.setState({ users: this.sortTable(this.props.users, orderBy) });
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <div className="buttons">
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => this.handleSort("rank")}
          >
            Rank
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => this.handleSort("points")}
          >
            Points
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => this.handleSort("name")}
          >
            Name
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => this.handleSort("age")}
          >
            Age
          </Button>
        </div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Points</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(row => (
                <TableRow key={row.key}>
                  <TableCell>{row.rank}</TableCell>
                  <TableCell>{row.points}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

LeaderBoardTable.propTypes = {
  users: PropTypes.array
};

export default LeaderBoardTable;
