import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliray';
import UpperNav from '../../Components/UpperNav/UpperNav';
import Toolbar from '../../Components/MainNav/Toolbar/Toolbar';
import SideDrawer from '../../Components/MainNav/SideDrawer/SideDrawer';

class MainNav extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render () {
    return (
      <Aux>
        <UpperNav />
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
      </Aux>
    );
  }
}

export default MainNav;