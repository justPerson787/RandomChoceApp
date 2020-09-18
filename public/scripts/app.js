"use strict";

console.log("app.js is running!!");

var webpage = {
    title: "Random Choice",
    subtitle: "JSX from app.js file",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //prevent fullpage refresh
    var option = e.target.elements.option.value; //get value from form

    if (option) {
        webpage.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * webpage.options.length);
    var option = webpage.options[randomNum];
    alert(option);
};

var onRemoveOptions = function onRemoveOptions() {
    webpage.options = [];
    render();
};

var render = function render() {
    //render subtitle only if it actually exists
    var template = React.createElement(
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
            webpage.options.length > 0 ? "Here are the options" : "There are no options"
        ),
        React.createElement(
            "button",
            { disabled: webpage.options.length === 0, onClick: onMakeDecision },
            "What to choose?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveOptions },
            "Remove all"
        ),
        React.createElement(
            "ol",
            null,
            webpage.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();
