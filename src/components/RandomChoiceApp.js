import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class RandomChoiceApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => { 
        this.setState(() => ({ options: [] }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }   
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };
    handleClearSelectedOption = (selectedOption) => {
        this.setState(() => ({ selectedOption: undefined }));
    };

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
   
    render() {
        const title = 'Random Choice App';
        const subtitle = 'Put your life in the hands of a computer';        

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
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
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}