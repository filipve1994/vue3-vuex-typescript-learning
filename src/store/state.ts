//A state is a store object that holds the application-level data that needs to be shared between components.

export type TaskItem = {
    id: number;
    title: string;
    description: string;
    createdBy: string;
    assignedTo: string;
    completed: boolean;
    editing: boolean;
};
export type State = {
    loading: boolean;
    tasks: TaskItem[];
    showCreateModal: boolean;
    showEditModal: boolean;
    showTaskModal: boolean;
    editModalTaskId: number | undefined;
    showTaskId: number | undefined;
};
export const state: State = {
    loading: false,
    tasks: [],
    showCreateModal: false,
    showEditModal: false,
    showTaskModal: false,
    editModalTaskId: undefined,
    showTaskId: undefined,
};

/*
Here, we add some type of safety to the TaskItem and State by defining their types.
We also export types because they will be used in the definitions of getters, mutations and actions.
Finally, we cast the State type to the state.
 */
