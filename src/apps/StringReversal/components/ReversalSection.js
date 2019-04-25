import React from 'react';
import UserInput from './UserInput';
import Results from './Results';

class ReversalSection extends React.Component {
    constructor() {
        super();
        this.state = {
            givenString: ""
        }
        this.getString = this.getString.bind(this);
    }

    getString(e) {
        this.setState({givenString: e.target.value});
    }

    reverseString(string) {
        return string.split("").reverse().join("");
    }

    render() {
        return (
            <div className="content-container">
                <UserInput getString={this.getString} />
                <Results reversedString={this.reverseString(this.state.givenString)} />
            </div>
        )
    }
}

export default ReversalSection;