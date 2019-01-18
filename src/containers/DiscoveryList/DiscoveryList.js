import React, { Component } from 'react';
import { connect } from "react-redux";
import fetchUsers from '../../store/actions/fetchUsers/fetchUsers';

import Spinner from '../../components/UI/Spinner/Spinner';
import Discovery from '../../components/Discovery/Discovery';
import Offer from '../../components/Offer/Offer';
import Navigation from '../../components/UI/Navigation/Navigation';
import HeaderTitle from '../../components/UI/HeaderTitle/HeaderTitle';
import Aux from '../../hoc/Aux/Aux';
import './DiscoveryList.css';

class DiscoveryList extends Component {
  state = {
    search: ''
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  onSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const { users, spinner } = this.props
    let context = spinner ? <Spinner /> : users.filter(u => {
      return u.first_name.includes(this.props.value.toLowerCase())
    }).map(user => (
      <Aux key={user.id + 'key'}>
        {user.id === 2 ? <Offer /> : null}
        <Discovery
          key={user.id}
          id={user.id}
          teacherAvatar={user.avatar}
          teacherName={user.first_name}
          teacherLastName={user.last_name}
          teacherProfession={user.profession}
          courses={user.courses}
        />
      </Aux>
    ))

   

    return (
      <Aux>
        <HeaderTitle title="Welcome to Vidya" subtitle="Here is the latest courses for you."/>
        {/* <Navigation value={this.state.search} change={this.onSearch}/> */}
        {/* <HeaderTitle title="Welcome to Vidya" subtitle="Here is the latest courses for you." /> */}
        <div className="row justify-content-between">
          {context}
        </div>
      </Aux>

    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    spinner: state.spinner.spinner,
    courses: state.courses.courses
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryList);