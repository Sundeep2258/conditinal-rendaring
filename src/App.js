import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    /*
    //if_else in variables
    let renderAuthBtn
    if (isLoggedIn === true) {
      renderAuthBtn = <button type="button">Logout</button>
    } else {
      renderAuthBtn = <button type="button">Login</button>
    }
    */
    return (
      <div className="container">
        <Welcome name="jarves" />
        {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )}
        {/* {renderAuthBtn} */}
      </div>
    )
  }
}

export default App
