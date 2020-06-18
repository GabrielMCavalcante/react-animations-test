import React, { Component } from "react"

import { Transition } from 'react-transition-group'

import "./App.css"
import Modal from "./components/Modal/Modal"
import Backdrop from "./components/Backdrop/Backdrop"
import List from "./components/List/List"

class App extends Component {

  state = { show: false, showBlock: false }

  toggleModal() {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}
        >Toggle</button>

        <br />

        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={()=>console.log('enter')}
          onEntering={()=>console.log('entering')}
          onEntered={()=>console.log('entered')}
          onExit={()=>console.log('exit')}
          onExiting={()=>console.log('exiting')}
          onExited={()=>console.log('exited')}
        >
          {state => (
            <div style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === 'exiting' ? 0 : 1
            }}></div>
          )}
        </Transition>

        <Modal show={this.state.show} closed={this.toggleModal.bind(this)} />

        {this.state.show && <Backdrop show />}

        <button className="Button" onClick={this.toggleModal.bind(this)}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    )
  }
}

export default App
