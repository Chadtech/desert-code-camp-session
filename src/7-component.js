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

  render: function(){
    return (
      div({},
        p({},
          text("Whats your star trek name? Enter your SSN to find out!")
        ),
        input({placeholder: "enter SSN here"}),
        input({
          type: "submit",
          onClick: function() {
            console.log("Spock")
          }
        })  
      )
    );
  }
};

const render = component => {
  document.body.appendChild(
    component.render()
  );
};

render(starTrekNameApp);
