const node = tag => {
  return (attributes, children) => {

    const element = 
      document.createElement(tag);

    return element;
  }
};

const p = node("p");

const render = root => {
  document.body.appendChild(root);
};

render( p({}, []) );