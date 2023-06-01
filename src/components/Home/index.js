// Write your code here
import {Component} from 'react'

import {LoginMessage, LogoutMessage} from '../Message'

import LogoutButton from '../Logout'
import LoginButton from '../Login'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  onClickLogout = () => {
    console.log('clicked')

    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="message-container">
          {isLoggedIn ? (
            <>
              <LogoutMessage />
              <LogoutButton onClick={this.onClickLogout} />
            </>
          ) : (
            <>
              <LoginMessage />
              <LoginButton onClick={this.onClickLogin} />
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
