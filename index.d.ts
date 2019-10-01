import React, {Component} from "react";
import {TouchableOpacityProps} from "react-native";

interface Props extends TouchableOpacityProps{
    pressThrottle?: number;
}

declare module "rn-throttle-button" {
    export class ThrottleButton extends Component<Props> {}
}

export default ThrottleButton;
