class RandomChoiceApp extends React.Component {
    render() {
        const title = 'Random Choice App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['one', 'two', 'three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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