import React, {Component} from "react";
import {TouchableOpacityProps} from "react-native";

declare module "rn-throttle-button" {

    export interface ThrottleButtonProps extends TouchableOpacityProps {
        children?: Component
    }

    export class ThrottleButton extends Component<ThrottleButtonProps> {}

}

export default ThrottleButton;
