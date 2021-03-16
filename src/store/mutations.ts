import { MutationTree } from 'vuex';
import { State, TaskItem } from './state';

/*
Mutations are methods that modify the store state. It accepts state as the first argument and payload
as the second, and eventually modifies the store state with the payload.
To create mutations, we will use constants for mutation types as recommended by the Vuex docs.
 */

/*
MutationTree is a generic type, that is shipped with the Vuex package.
it helps to declare a type of mutation tree. We will use it as we proceed.
Here, all of our possible names of mutations are stored in the MutationTypes enum.
 */

export enum MutationType {
    CreateTask = 'CREATE_TASK',
    SetTasks = 'SET_TASKS',
    CompleteTask = 'COMPLETE_TASK',
    RemoveTask = 'REMOVE_TASK',
    EditTask = 'EDIT_TASK',
    UpdateTask = `UPDATE_TASK`,
    SetLoading = 'SET_LOADING',
    SetCreateModal = 'SET_CREATE_MODAL',
    SetEditModal = 'SET_EDIT_MODAL',
    SetTaskModal = 'SET_TASK_MODAL'
}

// Next, we will declare a contract (types) for each MutationType
export type Mutations = {
    [MutationType.CreateTask](state: State, task: TaskItem): void
    [MutationType.SetTasks](state: State, tasks: TaskItem[]): void
    [MutationType.CompleteTask](
        state: State,
        task: Partial<TaskItem> & { id: number }
    ): void
    [MutationType.RemoveTask](
        state: State,
        task: Partial<TaskItem> & { id: number }
    ): void
    [MutationType.EditTask](
        state: State,
        task: Partial<TaskItem> & { id: number }
    ): void
    [MutationType.UpdateTask](
        state: State,
        task: Partial<TaskItem> & { id: number }
    ): void
    [MutationType.SetLoading](state: State, value: boolean): void
    [MutationType.SetCreateModal](state: State, value: boolean): void
    [MutationType.SetEditModal](state: State, value: { showModal: boolean, taskId: number | undefined }): void
    [MutationType.SetTaskModal](state: State, value: { showModal: boolean, taskId: number | undefined }): void
}

// Next, we will implement the contract (types) declared for each MutationType :
export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateTask](state, task) {
        state.tasks.unshift(task);
    },
    [MutationType.SetTasks](state, tasks) {
        state.tasks = tasks;
    },
    [MutationType.CompleteTask](state, newTask) {
        const task = state.tasks.findIndex(element => element.id === newTask.id);
        if (task === -1) {
            return;
        }
        state.tasks[task] = {...state.tasks[task], ...newTask};
    },
    [MutationType.RemoveTask](state, Task) {
        const task = state.tasks.findIndex(element => element.id === Task.id);
        if (task === -1) {
            return;
        }
        //If Task exist in the state, remove it
        state.tasks.splice(task, 1);
    },
    [MutationType.EditTask](state, Task) {
        const task = state.tasks.findIndex(element => element.id === Task.id);
        if (task === -1) {
            return;
        }
        //If Task exist in the state, toggle the editing property
        state.tasks[task] = {...state.tasks[task], editing: !state.tasks[task].editing};
        console.log('taskino', state.tasks[task]);
    },
    [MutationType.UpdateTask](state, Task) {
        state.tasks = state.tasks.map(task => {
            if (task.id === Task.id) {
                return {...task, ...Task};
            }
            return task;
        });
    },
    [MutationType.SetLoading](state, value) {
        state.loading = value;
        console.log('I am loading...');
    },
    [MutationType.SetCreateModal](state, value) {
        state.showCreateModal = value;
    },
    [MutationType.SetEditModal](state, value) {
        state.showEditModal = value.showModal;
        state.editModalTaskId = value.taskId;
    },
    [MutationType.SetTaskModal](state, {showModal, taskId}) {
        state.showTaskModal = showModal
        state.showTaskId = taskId
    }
}

/*
Here, we create the mutations variable which stores all the implemented mutations.
The MutationTree<State> & Mutations ensures that the contract is implemented correctly
else Typescript will trigger an error.
 */
