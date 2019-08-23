const initState = {
    allCoins: [],
    someMoreData: {},
    myData: {}
};

export function coinsReducer(state = initState, action) {

    switch (action.type) {
        case "SET_ALL_COINS":
            return { ...state, allCoins: [...action.payload.allCoins] };
        case "CHANGE_FOLLOWING":
            const index = state.allCoins.findIndex(coin => coin.id === action.payload.id)

            return {
                ...state,
                allCoins: [...state.allCoins.slice(0, index), // everything before current post
                {
                    ...state.allCoins[index],
                    follow: action.payload.follow,
                },
                ...state.allCoins.slice(index + 1)] // everything after current post
            }
        case "FETCH_ERROR":
            console.log(action.payload);
            return initState;
        case "UNFOLLOW_ALL":
            let unfollowAll = state.allCoins.map((c) => {
                c.follow = false;
                return c;
            })

            localStorage.clear();

            return { ...state, allCoins: [...unfollowAll] };
        default:
            break;
    }

    return state;
}