import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("Event:", event);
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log("Testing", {[event.target.id]: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id});
        this.setState({ title : ""});
    }
    render() {
        const { title } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-sucess btn-lg"
                    >
                    SAVE
                    </button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const Form = connect(null, mapDispatchToProps) (ConnectedForm);

export default Form;

