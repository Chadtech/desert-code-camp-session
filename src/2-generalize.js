const node = tag => {
  return function(attributes, children) {
    var element = document.createElement(tag);
    const keys = Object.keys(attributes)

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

const p = node("p");
const text = t => document.createTextNode(t);

const render = root => {
  document.body.appendChild(root);
};

render( 
  p(
    {style: "color: #ff0000;"}, 
    [ text("DANK") ] 
  ) 
);