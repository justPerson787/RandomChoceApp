import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };    
    handleAddOption = (e) => {
        e.preventDefault();//prevent default form submission after call
        const option = e.target.elements.option.value.trim(); //trim removes extra blank spaces 
        const error = this.props.handleAddOption(option);

        //update error
        this.setState(() => ({ error }));  
        
        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
               <form className="add-option" onSubmit={this.handleAddOption}>
                   <input className="add-option__input" type="text" name="option"></input>
                   <button className="button">Add option</button>
               </form>
            </div>
        );
    }
}