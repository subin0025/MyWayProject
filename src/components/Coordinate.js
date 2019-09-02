import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Coordinate extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.row}</TableCell>
                <TableCell>{this.props.col}</TableCell>
            </TableRow>
        )
    }
}

export default Coordinate;