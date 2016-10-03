# HI THERE

This is my talk for Desert Code Camp 2016.1. Its about how React works 'under the hood'.

In this repo, we build a simple rendering library, that is very similar to React. In the src folder, numbered files are progressively more complicated, each building on the prior, and introducing new features. Below is a summary of each file

0 We render a div, using a function called 'div'.

1 We render a p, using a function called 'p', that takes an argument that is text to include in the p.

2 We make a function that makes any variety of html tags, with parameters 'attributes' and 'children' to assign to the html element.

3 We add a little sugar to make the children parameter a little easier

4 An example of arranging and stylizing divs

5 Another example, of a simple identity theft application

6 We add event listeners to our html rendering functions

7 We make components, that have render functions

8 We give components state, and we render using that state

9 We make a React knock-off called 'Respond', which lets us event listeners modify state

A We make a counter application that doesnt work, because the app never re-renders

B We make a functional counter application that does work, because the app re-renders after state changes

C We make Respond Components which can be nested inside each other

D We give react classes props