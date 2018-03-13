import React, {Component} from "react"
import {TouchableOpacity} from "react-native"

export default class ThrottleButton extends Component {

    canPress = true;

    _onPress = () => {
        if (this.canPress) {
            this.props.onPress();
            this.canPress = false;
            setTimeout(() => this.canPress = true, this.props.pressThrottle);
        }
    };np

    render() {
        return (
            <TouchableOpacity {...this.props} onPress={this._onPress}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

ThrottleButton.defaultProps = {
    pressThrottle: 300,
    onPress: () => true
};