export function reducer(state, action) {

    switch (action.type) {
        case 'Add':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]

            }
        case 'remove':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload
                )
            }

        case 'edit':
            const edititm = action.payload

            const item = state.tasks.map((itms) => {
                if (itms.id === edititm.id) {
                    return edititm
                }
                return itms
            })
            return {
                ...state,
                tasks: item
            }

        default:
            return state
    }
}
