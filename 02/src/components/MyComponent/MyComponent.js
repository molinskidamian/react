import React from "react";

class MyComponent extends React.Component {
    state = {
        text: ": My Component",
    };

    setName = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <>
                <input type="text" onChange={this.setName} placeholder="Component name" />
                <h1>Nazwa komponentu{this.state.text}</h1>
            </>
        );
    }
}

export default MyComponent;
