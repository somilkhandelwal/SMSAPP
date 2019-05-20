import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import { withTranslation } from 'react-i18next';
/*
 Table Header Render Componet
 */
class EnhancedTableHead extends React.Component {
    createSortHandler = property => (event) => {
      const { onRequestSort } = this.props;
      onRequestSort(event, property);
    };

    render() {
      const {
        order, orderBy, rows, t
      } = this.props;
      return (
        <TableHead>
          <TableRow>
            {rows.map(
              row => (
                <TableCell
                  key={row.id}
                  align={row.numeric ? 'right' : 'left'}
                  padding={row.disablePadding ? 'default' : 'none'}
                  sortDirection={orderBy === row.id ? order : false}
                >
                  <Tooltip
                    title={t('ENHANCED_TABLE_HEAD_SORT')}
                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      active={orderBy === row.id}
                      direction={order}
                      onClick={this.createSortHandler(row.id)}
                    >
                      {t(row.labelEn)}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              ),
              this,
            )}
          </TableRow>
        </TableHead>
      );
    }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rows: PropTypes.array,
  t: PropTypes.func.isRequired
};
EnhancedTableHead.defaultProps = {
  rows: null
};

export default withTranslation()(EnhancedTableHead);
