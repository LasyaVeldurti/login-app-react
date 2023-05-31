// Write your code here
import {Component} from 'react'

import {LoginMessage, LogoutMessage} from '../Message'

import LoginButton from '../Login'

import LogoutButton from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="message-container">
          {isLoggedIn ? (
            <>
              <LogoutMessage />
              <LogoutButton />
            </>
          ) : (
            <>
              <LoginMessage />
              <LoginButton />
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
