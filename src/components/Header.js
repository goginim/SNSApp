import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Header extends Component {

    constructor(props) {
      super(props);

      this.state = {
        search: false
      };
      this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch() {
      this.setState({
        search: !this.state.search
      });
    }

    render() {
      const loginButton = (
        <li>
          <Link to="/login"><i className="material-icons">vpn_key</i></Link>
        </li>
      );

      const logoutButton = (
        <li>
          <a onClick={this.props.onLogout}><i className="material-icons">lock_open</i></a>
        </li>
      );
      return (
        <div>
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo center">DAILY BOARD</Link>
              <ul>
                <li><a onClick={this.toggleSearch}><i className="material-icons">search</i></a></li>
              </ul>
              <div className="right">
                <ul>
                  <li className="notification">
                    <Link to="">
                      <i className="material-icons">notifications</i>
                      <span className="notification-badge">N</span>
                    </Link>
                  </li>
                  { this.props.isLoggedIn ? logoutButton : loginButton }
                </ul>
              </div>
            </div>
          </nav>
          <ReactCSSTransitionGroup transitionName="search" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
              { this.state.search ? <Search
                                      onClose={this.toggleSearch}
                                      onSearch={this.props.onSearch}
                                      usernames={this.props.usernames}/> : undefined }
          </ReactCSSTransitionGroup>
        </div>
      );
    }
}
