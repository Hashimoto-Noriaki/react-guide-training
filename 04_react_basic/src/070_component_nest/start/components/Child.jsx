import "./Child.css";
import { List } from "./List";

const Child = () => {
    return (
        <div className="component">
            <h3>Hello Component</h3>
            <List />
        </div>
    );
};

export default Child;

/* POINT default export の別の記法

export default () => {
    return (
        <div className="component">
        <h3>Hello Component</h3>
        <List />
        </div>
    );
};

 */
