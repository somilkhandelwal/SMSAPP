/* eslint-disable no-tabs */
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    border: '2px solid	#606060',
    '&:hover': {
      color: 'rgb(243, 243, 245)',
      backgroundColor: '#0294F2',
      border: '2px solid	#0294F2'

    }
  },
  buttonSelected: {
    color: 'rgb(243, 243, 245)',
    backgroundColor: '#0294F2',
    border: '2px solid	#0294F2',
    '&:hover': {
      color: 'rgb(243, 243, 245)',
      backgroundColor: '#0294F2',
      border: '2px solid	#0294F2'

    }
  },
  tabHeader: {
    maxWidth: 'none',
    minWidth: 'none',
    width: '50%'
  }

});

export default styles;
