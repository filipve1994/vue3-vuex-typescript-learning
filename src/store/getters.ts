/*
Getters are methods that receive the state as its first parameter and
return computed information from the store state.
 */
import { GetterTree } from 'vuex'
import { State, TaskItem } from './state'

export type Getters = {
    completedTaskCount(state: State): number
    totalTaskCount(state: State): number
    getTaskById(state: State): (id :number) => TaskItem | undefined
}

export const getters: GetterTree<State, State> & Getters = {
    completedTaskCount(state) {
        return state.tasks.filter(element => element.completed).length
    },
    totalTaskCount(state) {
        return state.tasks.length
    },
    getTaskById: (state) => (id: number) => {
        return state.tasks.find(task => task.id === id)
    }
}
