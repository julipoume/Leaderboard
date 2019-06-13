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
      users: this.props.users,
      propOrder: {
        property: "",
        order: ""
      }
    };
  }
  //get the order to sort the table
  getOrder = property => {
    let order;
    //if the property to order was click before
    if (this.state.propOrder.property === property) {
      order = this.state.propOrder.order === "asc" ? "desc" : "asc";
    } else {
      order = "asc";
    }
    this.setState({ propOrder: { property: property, order: order } });
    return order;
  };
  //to sort the table depending the specific field
  sortTable = (users, property, order) => {
    let arg;
    if (order === "asc") {
      arg = users.sort((a, b) =>
        a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0
      );
    } else {
      arg = users.sort((a, b) =>
        a[property] < b[property] ? 1 : b[property] < a[property] ? -1 : 0
      );
    }
    return arg;
  };
  handleSort = orderByProperty => {
    console.log("handleSort", orderByProperty);
    var order = this.getOrder(orderByProperty);
    this.setState({
      users: this.sortTable(this.props.users, orderByProperty, order)
    });
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
