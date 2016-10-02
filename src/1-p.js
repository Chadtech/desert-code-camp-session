function p(text) {
  output = document.createElement("p");

  output.appendChild(
    document.createTextNode(text)
  );

  return output;
};

document.body.appendChild( p("dank") );