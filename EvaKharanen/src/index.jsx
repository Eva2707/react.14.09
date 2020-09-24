import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Message from "./components/Message.jsx";
import { v4 as uuidv4 } from 'uuid';
import MessageField from "./components/MessageField";

class HelloMessage extends Component {
    state = {
        messages: [
            {
                id: uuidv4(),
                author: "Bot",
                message: "hi from Bot"
            }
        ]
    }
    addMessage = ( message ) => {
        const { messages } = this.state;
        this.setState({ messages: [...messages, {author:message.author, message: message.message, id: uuidv4()}]});
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(123)
        const { messages} = this.state;
        if (messages.length % 2 === 0){
            this.addMessage({author: "Botik", message: " hi, i am Botik, your friend, i will talk with you )" })
        }
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <MessageField addMessage={this.addMessage}/>
                <ul>
                    {messages.map(({id, author, message}) => (
                        <Message key={id} author={author} message={message} />
                    ))}
                </ul>
            </div>
        );
    }
}
    ReactDOM.render(
        <HelloMessage name="Eva"/>,
        document.getElementById("example"));
