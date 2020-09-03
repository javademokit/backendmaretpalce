import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Admindashboard from './ADMINDashBoard/Admindashboard'


import { Link, Route, Switch } from "react-router-dom";



import 'bootstrap/dist/css/bootstrap.min.css';

import myproject from './DashBordGraph/myproject'
import mycard from './DashBordGraph/mycard'
import mydashboard from './DashBordGraph/mydashboard'
import Validation from './ADMINDashBoard/Validation'


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft:10,
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    let s1 = {verticalAlign: 'middle'};
    let s2 = {textAlign: 'right'};



    return (
      <div className={classes.root}>


        <CssBaseline />

        <AppBar

          position="fixed"
          
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="textPrimary"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
             <MenuIcon /><b>open</b>
            </IconButton>

            
            {/* <Typography variant="body2" color="textSecondary" align="center"> */}
            
            <div className="text-right" >
           <h>Marketplace</h>
              </div>
             


            {/* </Typography> */}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>

            <IconButton onClick={this.handleDrawerClose}><h1><b>Marketplace</b> </h1>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> :<ChevronRightIcon />       }

            </IconButton>
          </div>
          <Divider />
          


          
          <h><Link to="/myproject">myproject</Link></h>
          <h><Link to="/mycard">mycard</Link></h>
          <h><Link to="/mydashboard">mydashboard</Link></h>
       
          <h><Link to="/Admindashboard">Admindashboard</Link></h>
          <h><Link to="/Validation">Validation</Link></h>



         

       
      

          <Divider />
         
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >

          <div className={classes.drawerHeader} />
          <Typography paragraph>
          

          <Switch>
          
          <Route path="/myproject" component={myproject} />
          <Route path="/mycard" component={mycard} />
          <Route path="/mydashboard" component={mydashboard} />
          <Route path="/Admindashboard" component={Admindashboard} />
          <Route path="/Validation" component={Validation} />





        </Switch>


          </Typography>
         
        </main>

        
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
