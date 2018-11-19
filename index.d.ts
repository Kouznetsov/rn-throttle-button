import React, {Component} from "react";
import {TouchableOpacityProps} from "react-native";

declare module "rn-throttle-button" {
    export class ThrottleButton extends Component<TouchableOpacityProps> {}
}

export default ThrottleButton;
