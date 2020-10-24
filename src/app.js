import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';
import Options from './components/Options';

class RandomChoiceApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); //return object
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            //do nothing 
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options); //return string
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption(option) {
        if (!option) {
            return "Enter valid option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }     

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const title = 'Random Choice App';
        const subtitle = 'Put your life in the hands of a computer';        

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick ={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

ReactDOM.render(<RandomChoiceApp options={[]}/>, document.getElementById('app'));