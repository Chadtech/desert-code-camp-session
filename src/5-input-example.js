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

const div   = node("div");
const input = node("input");
const p     = node("p");

const render = root => {
  document.body.appendChild(root);
};

render(
  div({},
    p({},
      text("Whats your star trek name? Enter your SSN to find out!")
    ),
    input({placeholder: "enter SSN here"}),
    input({type: "submit"})   
  )
);
