
import {createElement,Component,render} from "./typ-react";

class MyComponent extends Component{
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id = 'a' class = 'c'>
    <div>abcd</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</MyComponent>,document.body);
