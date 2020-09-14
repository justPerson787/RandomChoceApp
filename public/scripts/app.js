"use strict";

console.log("app.js is running!!");

var webpage = {
    title: "Random Choice",
    subtitle: "JSX from app.js file",
    options: ["One", "Two"]

    //render subtitle only if it actually exists
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        webpage.title
    ),
    webpage.subtitle && React.createElement(
        "p",
        null,
        " ",
        webpage.subtitle
    ),
    React.createElement(
        "p",
        null,
        webpage.options.length > 0 ? "Here are the options:" : "There are no options"
    )
);

var user = {
    name: "Elisa",
    location: "SP",
    age: 26
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonimous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
