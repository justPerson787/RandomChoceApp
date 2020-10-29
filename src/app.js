import React from 'react';
import ReactDOM from 'react-dom';
import RandomChoiceApp from './components/RandomChoiceApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render(<RandomChoiceApp options={[]}/>, document.getElementById('app'));