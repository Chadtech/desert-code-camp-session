render(
  div(
    {style: "position: absolute; left: 0px; top: 0px; color: #ff0000;"},
    div({})
  )
);

const node = tag => {
  return function(attributes) {

    const children = [];
    for (var i = 1; i < arguments.length; i++) {
      children.push(arguments[i]);
    }

    var element = 
      document.createElement(tag);

    element = children.reduce((el, child,) => {
      el.appendChild(child)
      return el;
    }, document.createElement(tag));

    Object.keys(attributes).reduce((el, key) => {
      el.setAttribute(key, attributes[key]);
      return el;
    }, element);

    return element;
  }
};

const text = t => document.createTextNode(t);

const div = node("p");

const render = root => {
  document.body.appendChild(root);
};

