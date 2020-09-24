import React, {Component} from 'react';

class MessageField extends Component {
    state = {
        author: "",
        message: ""
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { addMessage } = this.props;
        addMessage(this.state)
    }

    onChange = ({ target }) => {
        const { value, name } = target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const { author, message } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                <input
                    name="author"
                    label="Author"
                    onChange={this.onChange}
                    value={author}
                    autoComplete="off"/>
                    <span> author</span>
                </div>
                <div>
                    <input
                    name="message"
                    label="Message text"
                    onChange={this.onChange}
                    value={message}
                    autoComplete="off"/>
                    <span> message</span>
                </div>
                <button type="submit">Add</button>
            </form>
        );
    }
}

MessageField.propTypes = {};

export default MessageField;