const oldVDOM = {
  tag: "div",
  attributes: 'style="color: red;"',
  children: [],
};

const newVDOM = {
  tag: "div",
  attributes: { style:"color: blue;" },
  children: [],
};

function stringify({tag, attributes}) {
  const keys = Object.keys(attributes);
  return (
    keys.reduce((str, key) => {

      const attribute = attributes[key];

      return (str + " " + key + " : " + attribute);

    }, (tag + " "))
  );
}

function diff(newVDOM, oldVDOM) {
  return (
    stringify(newVDOM) === stringify(oldVDOM)
  );
}

// stringify(oldVDOM) == "div style : color: red;"

// stringify(newVDOM) == "div style : color: blue;"