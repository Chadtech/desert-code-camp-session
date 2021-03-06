const Respond = {
  render: function(component) {
    document.body.appendChild(
      component.render()
    );
  },

  createClass: function(component) {
    keys = Object.keys(component)

    return (
      keys.reduce((c, key) => {
        var value = component[key];

        if (typeof value === "function") {
          value = value.bind(c);
        }

        c[key] = value;

        return c;
      }, {})
    );
  },
}


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
      if (key.slice(0,2) === "on") {
        el.addEventListener(
          key.slice(2).toLowerCase(), 
          attributes[key]
        );
      } else {
        el.setAttribute(key, attributes[key]);
      }
      return el;
    }, element)

    return element;
  }
};

const text = t => document.createTextNode(t);

const div   = node("div");
const input = node("input");
const p     = node("p");

const Counter = {
  state: { count: 0 },

  increment: function() {
    this.state.count = this.state.count + 1;
    console.log(this.state.count);
  },

  render: function(){
    return (
      div({},
        p({}, text("counter!!")),
        p({}, text("" + this.state.count)),
        input({
          type:    "submit",
          value :  "+",
          onClick: this.increment
        })    
      )
    );
  }
};

App = Respond.createClass(Counter);

Respond.render(App);

