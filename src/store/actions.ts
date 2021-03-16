// /store/action.ts

// Actions are methods that trigger the mutations.
// When handling asynchronous tasks, actions are used before calling the corresponding mutations.
// We will simulate asynchronous tasks as we create our actions.
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
    GetTaskItems = 'GET_Task_ITEMS',
    SetCreateModal = 'SET_CREATE_MODAL',
    SetEditModal = 'SET_EDIT_MODAL'
}

/*
Here we use the ActionContext type which is shipped with the Vuex package, in the
ActionAugments type to restrict commits only to the declared mutations and also to check the payload type.
 */
type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}
export type Actions = {
    [ActionTypes.GetTaskItems](context: ActionAugments): void
    [ActionTypes.SetCreateModal](context: ActionAugments): void
    [ActionTypes.SetEditModal](context: ActionAugments): void
}

/*
Here we create a sleep variable that returns Promise.
Followed by the actions variable which stores all the implemented actions.
Similarly, the ActionTree<State> & Actions ensures that the contract (type Actions)
is implemented correctly else Typescript will trigger an error.

Next, we set up our asynchronous call in the GetTaskItems action and commit
an array containing a single task object. we also set up SetCreateModal and SetEditModal actions.
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GetTaskItems]({ commit }) {
        commit(MutationType.SetLoading, true)
        await sleep(1000)
        commit(MutationType.SetLoading, false)
        commit(MutationType.SetTasks, [
            {
                id: 1,
                title: 'Create a new programming language',
                description: "The programing language should have full typescript support ",
                createdBy: "Emmanuel John",
                assignedTo: "Saviour Peter",
                completed: false,
                editing: false
            }
        ])
    },
    async [ActionTypes.SetCreateModal]({ commit }) {
        commit(MutationType.SetCreateModal, true)
    },
    async [ActionTypes.SetEditModal]({ commit }) {
        commit(MutationType.SetEditModal, {showModal: true, taskId: 1})
    }
}
