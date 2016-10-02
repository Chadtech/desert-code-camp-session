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
        value = c[key];

        if (typeof c[key] === "function") {
          c[key] = value.bind(c);
        }

        return c;
      }, component)
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

const starTrekNameApp = {
  state: {
    theme: "star trek",
    inputClicked: false
  },

  sayStarTrekName: function() {
    console.log(this.state);
    this.state.inputClicked = true;
    console.log(this.state);
  },

  render: function(){

    const titleMsg = 
      "Whats your " 
      + this.state.theme 
      + " name?  Enter your SSN to find out!";


    return (
      div({},
        p({}, text(titleMsg)),
        input({placeholder: "enter SSN here"}),
        input({
          type: "submit",
          onClick: this.sayStarTrekName
        })    
      )
    );
  }
};

App = Respond.createClass(starTrekNameApp);

Respond.render(App);

