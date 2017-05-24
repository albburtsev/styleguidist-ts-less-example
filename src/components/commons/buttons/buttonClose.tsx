import * as React from "react";
import {Button} from "./button";
// TODO: one can import the interface for the properties but it will not be displayed 
// in styleguidist unless it's re-exported
// import {IPropertyButtonClose} from "./IPropertyButtonClose";

// We are forced to have the props interface in the same file than the component

export interface IPropertyButtonClose {
    callback?: () => void;
}

// No export default doesn't work here

export class ButtonClose extends React.Component<IPropertyButtonClose, undefined> {
    public render(): JSX.Element | any {
        return <Button title={"X"} className={"close-button"} callback={this.props.callback}/>;
    }
}

// TODO: this is the only way to make an interface declare in an external file to be display in styleguidist
// export * from "./IPropertyButtonClose";

// This is the only way to make reactjs component to work in the *.md files.
export default ButtonClose;

