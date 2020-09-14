console.log("app.js is running!!");

const webpage = {
    title: "Random Choice",
    subtitle: "JSX from app.js file",
    options: ["One", "Two"]
}


//render subtitle only if it actually exists
const template = (
    <div>
        <h1>{webpage.title}</h1>
        {webpage.subtitle && <p> {webpage.subtitle}</p>}
    <p>{webpage.options.length > 0? "Here are the options:" : "There are no options"}</p>
    </div>
);

const user = {
    name: "Elisa",
    location: "SP",
    age: 26
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name? user.name: "Anonimous"}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p>}        
        {getLocation(user.location)}
        
    </div>    
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);