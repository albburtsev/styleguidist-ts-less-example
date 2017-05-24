import * as React from "react";
// import {IPropertyButton} from "./IPropertyButton";

export interface IPropertyButton {
    title: string;
    callback?: () => void;
    className?: string;
}

export class Button extends React.Component<IPropertyButton, undefined> {

    public render(): JSX.Element | any {
        const settings = this.props;
        let className = "button";
        if (settings.className != undefined) {
            className += " " + settings.className;
        }
        return <button className={className} onClick={this.onClickHandler}>{settings.title}</button>;
    }

    private onClickHandler = () => {
        if (this.props.callback != undefined) {
            this.props.callback();
        }
    }
}

export default Button;
