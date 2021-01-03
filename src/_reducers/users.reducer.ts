interface UsersAction {
    type: string,
}

export function users(state = {}, action: UsersAction) {
    switch(action.type) {
        default:
            return state;
    }
}