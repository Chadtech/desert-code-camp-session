const Respond = {
  render: function (component) {
    this.app = component;
    document.body.appendChild(component.render());
  },

  app: undefined,

  rerender: function (component) {
    thePage = document.body.parentElement;
    thePage.removeChild(document.body);
    thePage.appendChild(document.createElement("body"));

    this.render(this.app);
  },

  createClass: function (component) {
    keys = Object.keys(component);

    component.setState = function (change) {
      keys = Object.keys(change);

      this.state = Object.assign(this.state, change);

      Respond.rerender(this);
    };

    return keys.reduce((c, key) => {
      value = c[key];

      if (typeof c[key] === "function") {
        c[key] = value.bind(c);
      }

      return c;
    }, component);
  }
};

const node = tag => {
  return function (attributes) {
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
      if (key.slice(0, 2) === "on") {
        el.addEventListener(key.slice(2).toLowerCase(), attributes[key]);
      } else {
        el.setAttribute(key, attributes[key]);
      }
      return el;
    }, element);

    return element;
  };
};

const text = t => document.createTextNode(t);

const div = node("div");
const input = node("input");
const p = node("p");

const Counter = {
  state: { count: 0 },

  increment: function () {
    this.setState({
      count: this.state.count + 1
    });
  },

  render: function () {
    return div({}, p({}, text("counter!!")), p({}, text("" + this.state.count)), input({
      type: "submit",
      value: '+',
      onClick: this.increment
    }));
  }
};

App = Respond.createClass(Counter);

Respond.render(App);