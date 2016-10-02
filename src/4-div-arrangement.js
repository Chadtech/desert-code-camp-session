const node = tag => {
  return function(attributes) {
    var element = document.createElement(tag);
    const keys = Object.keys(attributes);

    // Get a list of the children
    const children = [];
    for (var i = 1; i < arguments.length; i++) {
      children.push(arguments[i]);
    }

    // Give the element its children
    element = children.reduce((el, child) => {
      el.appendChild(child);
      return el;
    }, element);

    // Give the element its attributes
    element = keys.reduce((el, key) => {
      el.setAttribute(key, attributes[key]);
      return el;
    }, element)

    return element;
  }
};

const text = t => document.createTextNode(t);
const div = node("div");

const render = root => {
  document.body.appendChild(root);
};

render(
  div({},
    div({style: "position: absolute; left: 100px; top: 100px; background-color: #ffff00; width: 100px; height: 100px"}
    ),
    div({style: "position: absolute; left: 300px; top: 100px; background-color: #00ff00; width: 100px; height: 100px"}
    ),
    div({style: "position: absolute; left: 300px; top: 300px; background-color: #00ffff; width: 100px; height: 100px"}
    ),
    div({style: "position: absolute; left: 100px; top: 300px; background-color: #0000ff; width: 100px; height: 100px"}
    ),
  )
);
