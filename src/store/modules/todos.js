import axios from 'axios';

const state = {
    todos: [
        {id: 1, title: 'To do one'},
        {id: 2, title: 'To do two'}

    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {};

const mutations = {};

export default { state, getters, actions, mutations }