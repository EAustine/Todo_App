import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
      return {
          backgroundColor: '#E2E2E2',
          padding: '10px',
          borderBottom: '5px #CCC dotted',
          textDecoration: this.props.todo.completed ?
          'line-through' : 'none'
      }
    }



    render() {
        const { id, title } = this.props.todo;

        return (
            <div style = { this.getStyle() } >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind 
                        (this, id) } /> { '' }
                    { title }
                    <button style={ btnStyle } onClick={this.props.delTodo.bind 
                        (this, id) } > x </button> 
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
