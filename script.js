let root = ReactDOM.createRoot(document.getElementById("root"));


// <------------------------heading------------------------------>
let heading = React.createElement("h1",{style:{color:'green'},class:"heading"}, "Learn Web Development");

// <------------------------Paragraph 1------------------------------>
let para1 = React.createElement("p",{class:"para"}, "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo blanditiis eum expedita beatae, illum exercitationem maxime cum quidem porro molestiae ipsum minima nam quibusdam facilis deserunt iste dolores eveniet alias!");
let div1 = React.createElement("div",null,para1);

// <------------------------anchor------------------------------>
let anchor = React.createElement("a",{href:'https://www.google.com/',style:{color:'blue'}},"the rest of MDN");

// <------------------------Paragraph 2------------------------------>
let para2 = React.createElement("p", {class:"para"}, "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo blanditiis eum expedita beatae, illum exercitationem maxime cum quidem porro molestiae ipsum minima nam quibusdam facilis deseruntiste dolores ",anchor," ,eveniet alias!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo blanditiis eum expedita beatae.");
let div2 = React.createElement("div",null,para2);

// <------------------------Paragraph 3------------------------------>
let para3 = React.createElement("p", {class:"para"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo blanditiis eum expedita beatae, illum exercitationem maxime cum quidem porro molestiae ipsum minima nam quibusdam facilis deserunt iste dolores eveniet alias!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo blanditiis eum expedita beatae, illum exercitationem maxime cum quidem porro molestiae ipsum minima nam quibusdam facilis deserunt iste dolores eveniet alias!dolores eveniet alias!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo blanditiis eum expedita beatae, illum exercitationem maxime cum quidem porro molestiae ipsum minima nam quibusdam facilis deserunt iste dolores eveniet alias!");

let div3 = React.createElement("div",null,para3);

// <------------------------Br tag------------------------------>
let br = React.createElement("br",null,null);

// parent which have 3 paragraph and 1 heading 
let conatiner = React.createElement("div",null,heading,br,div1,br,div2,br,div3);


//react element need to add into dom : reactdom
root.render(conatiner);

