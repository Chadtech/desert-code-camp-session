Old Vdom          New Vdom
  div               div
    p "cool"          p "cool"
    p "dog"           p "cat"
    p "man"


diff(div, div);
  div == div
  -> Same! No change necessary

  diff(div.children[0], div.children[0]);
    p == p 
    -> Same! No Change necessary
    diff(p.children[0], p.children[0])
      "cool" == "cool"
      -> Same! No Change necessary

  diff(div.children[1], div.children[1]);
    p == p 
    -> Same! No Change necessary
    diff(p.children[0], p.children[0])
      "dog" == "cat"
      -> Different! Lets fix it
      merge("dog", "cat");
        -> Remove "dog"
        -> Add "Cat"

  diff(div.children[2], div.children[2]);
    p == undefined
    -> Different! Lets fix it
    merge(p, undefined)
      -> Add p "man"
      

