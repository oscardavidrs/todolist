import React from 'react';

class TodoForm extends React.Component {

    state = {
        title: ""
    };

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit(event);
        }
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onAddTodo(this.state)
        this.setState({
            title: ""
        })
    };

    render() {

        return (
            <section>
                <input
                    required
                    type="text"
                    name="title"
                    value={this.state.title}
                    style={{ width: "85%" }}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    onClick={this.handleSubmit}
                    type="button"
                    value="Submit"
                >ENVIAR</button>
            </section>
        )
    }
}

export default TodoForm