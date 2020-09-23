class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>Random Choice app</h1>
            <h2>Put your life in the hands of a computer</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What to choose?</button>
            </div>
        );
        }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                text
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                text
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));