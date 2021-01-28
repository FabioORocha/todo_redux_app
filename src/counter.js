import React from 'react';
import {connect} from 'react-redux';

const counter = (props) => (
    <div>
        <h2>Você tem {props.todos.length} tarefas pendentes</h2>
    </div>
);

const mapStateToProps = state =>({
    todos: state.todos,
});

export default connect(mapStateToProps)(counter);