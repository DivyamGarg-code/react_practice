const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from react");
console.log(heading); // This is an object | React element
/* This {} is the pace where you will give attributes to a tag */
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);// Work of ReactDom 

/*
<div id="parent">
    <div id="child">
        <h1>Hello wold</h1>
        <h2>Hello wold</h2>
    </div>
</div>

React.createElement(tag,object in which you'll pass the attributes,children or list of children if you have multiple siblings)
ReactElement(Object)=> HTML(Browser Understands)

 */
const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"Hello World from isauids"),
        React.createElement("h2",{},"Hello World from h2")
    ])
);

root.render(parent);