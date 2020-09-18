console.log("app.js is running!!");

const webpage = {
    title: "Random Choice",
    subtitle: "JSX from app.js file",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); //prevent fullpage refresh
    const option = e.target.elements.option.value; //get value from form

    if (option) {
        webpage.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};


const render = () => {
    //render subtitle only if it actually exists
    const template = (
        <div>
            <h1>{webpage.title}</h1>
            {webpage.subtitle && <p> {webpage.subtitle}</p>}
            <p>{webpage.options.length > 0? "Here are the options" : "There are no options"}</p>
            <p>{webpage.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>

        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");

render();