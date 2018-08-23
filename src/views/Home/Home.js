import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList'
import AppHeader from '../../components/appHeader/appHeader'

class Home extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <CardList />
      </div>
    );
  }
}

export default Home;