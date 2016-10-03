const Respond = {
  render: function(component) {
    this.app = component
    document.body.appendChild(
      component.render()
    );
  },

  app: undefined,

  rerender: function(component) {
    thePage = document.body.parentElement;
    thePage.removeChild(document.body);
    thePage.appendChild(
      document.createElement("body")
    );

    this.render(this.app);
  },

  createClass: function(component) {
    return (function(props) {
      
      component.isRespondClass = true;
      component.setState = function(change) {

        this.state = Object.assign(
          this.state, 
          change
        )

        Respond.rerender(this);
      };

      component.props = props;

      const keys = Object.keys(component);

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
    });
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
      if (child.isRespondClass) {
        el.appendChild(child.render());
      } else {
        el.appendChild(child);
      }
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

const Counter = Respond.createClass({
  render: function() {
    return (
      div({},
        p({}, text("" + this.props.count)),
        input({
          type:    "submit",
          value:   "+",
          onClick: this.props.increment
        })
      )
    );
  }
});

const CounterContainer = {
  state: { count: 0 },

  increment: function() {
    this.setState({
      count: this.state.count + 1
    });
  },

  render: function() {
    return (
      div({},
        p({}, text("counter!!")),
        Counter({
          increment: this.increment,
          count:     this.state.count
        })
      )
    );
  }
};

App = Respond.createClass(CounterContainer);

Respond.render(App());

