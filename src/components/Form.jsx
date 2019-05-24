import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            globalTitle: ""
        };
    }

    componentDidMount() {
        console.log('Rendered Form');
    }

    componentDidUpdate() {
        console.log('Title Changed');
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleSubmit = (e) => {
        const { title } = this.state;
        e.preventDefault();
        this.setState({ globalTitle: `My form ${title}` });
    }

    render() {
        const { title, globalTitle } = this.state;
        return (
            <div>
                <h1>
                    {globalTitle}
                </h1>
                <form>
                    <input type="text" value={title} onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default Form;
