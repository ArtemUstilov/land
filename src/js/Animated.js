import React, {Component} from 'react';
import {withLocalize} from "react-localize-redux";
class AnimatedTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatedClass: ''
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({
            animatedClass: 'animated'
        }), 450);
    }
    render() {
        return <div className={`animated-tag ${this.state.animatedClass}`}>{this.props.value}</div>;
    }
}
export default AnimatedTag;