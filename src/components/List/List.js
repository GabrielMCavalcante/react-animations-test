import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './List.css'

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            }
        })
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((_, index) => index !== selIndex)
            }
        })
    }

    render() {

        const classes = {
            enterActive: 'Added',
            exitActive: 'Removed',
        }

        const listItems = this.state.items.map((item, index) => (
            <CSSTransition 
                key={index}
                classNames={classes}
                timeout={300}
            >
                <li
                    className="ListItem"
                    onClick={() => this.removeItemHandler(index)}>{item}
                </li>
            </CSSTransition>
        ))

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup
                    component="ul"
                    className="List"
                >
                    {listItems}
                </TransitionGroup>
            </div>
        )
    }
}

export default List