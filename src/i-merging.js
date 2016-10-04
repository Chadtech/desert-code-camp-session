Old Vdom          New Vdom
  div               div
    p "cool"          p "cool"
    p "dog"           p "cat"
    p "man"


diff(div, div);
  div == div
  -> Theyre the same, so no change necessary

  diff(div.children[0], div.children[0]);
    p == p 
    -> Theyre the same, so no Change necessary
    diff(p.children[0], p.children[0])
      "cool" == "cool"
      -> Theyre the same, so no Change necessary

  diff(div.children[1], div.children[1]);
    p == p 
    -> Theyre the same, so no Change necessary
    diff(p.children[0], p.children[0])
      "dog" == "cat"
      -> Theyre difference, so lets fix it
      merge("dog", "cat");
        -> Remove "dog"
        -> Add "Cat"

  diff(div.children[2], div.children[2]);
    p == undefined
    -> Theyre different, so lets fix it
    merge(p, undefined)
      -> Add p "man"


