import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import EnhancedTableHead from './tableComponents/EnhancedTableHead';
import tableSortingHelper from '../../helper/tableSortingHelper';
/**
 * @param {*} theme 
 */

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    margin: '0 auto'

  },
  table: {
    minWidth: 1080
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  tableRow: {
    cursor: 'pointer'
  }
});
/*
  Generic Table Component
 */
class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order,
      orderBy: props.orderBy,
      page: 0,
      rowsPerPage: 10
    };
  }
  /*
    handle sort of Table
   */

  handleRequestSort = (event, property) => {
    const orderByDef = property;
    let orderDef = 'desc';
    const { orderBy, order } = this.state;
    if (orderBy === property && order === 'desc') {
      orderDef = 'asc';
    }

    this.setState({ order: orderDef, orderBy: orderByDef });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };
/* 
  CallBack on Select
*/

  onClick = (row) => {
    const { onSelect } = this.props;
    if (onSelect) onSelect(row);
  }

  render() {
    const { classes, data, rows } = this.props;
    const {
      order, orderBy, rowsPerPage, page
    } = this.state;
    const { stableSort, getSorting } = tableSortingHelper;
    if (!rows || !rows.length || !data || !data.length) return null;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return (
      <div className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              rows={rows}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={n.id}
                    onClick={() => this.onClick(n)}
                  >
                    {rows.map(row => <TableCell key={row.id}>{n[row.id]}</TableCell>)}
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 0 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page'
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page'
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  orderBy: PropTypes.string.isRequired,
  data: PropTypes.array,
  rows: PropTypes.array,
  order:PropTypes.string
};
EnhancedTable.defaultProps = {
  onSelect: () => null,
  data: null,
  rows: null,
  order: 'asc'

};
export default connect(null, null)(withStyles(styles)(EnhancedTable));
