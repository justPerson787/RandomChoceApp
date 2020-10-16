class RandomChoiceApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['one', 'two', 'three3']
        };
    }
    render() {
        const title = 'Random Choice App';
        const subtitle = 'Put your life in the hands of a computer';        

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {

    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What to choose?</button>
            </div>
        );
        }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this); //ensure correct context for handleRemoveAll
    }
    handleRemoveAll() {

    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }                
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();//prevent default form submission after call
        const option = e.target.elements.option.value.trim(); //trim removes extra blank spaces 
        if (option) {

        }
    }
    render() {
        return (
            <div>
               <form onSubmit={this.handleAddOption}>
                   <input type="text" name="option"></input>
                   <button>Add option</button>
               </form>
            </div>
        );
    }
}

ReactDOM.render(<RandomChoiceApp />, document.getElementById('app'));