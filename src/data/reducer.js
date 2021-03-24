export const initialState= {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing...
    // token: 'BQAV_FhiMR0a3lYxFuV3xf78aw6EnLcfgtGxLfT4YU2Y23bD_l…DCKubfk1wbp2-rkBv3wZofnSWIBdnXCdmYGi-rPR-PiIpwqc9',    
    // token: null,
};

const reducer = (state, action) => {
    console.log(action);
    // action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }          
        case 'SET_TOKEN':
            return{
                ...state,
                user: action.token,
            }          
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };          
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };          
        default:
            return state;
    }
};

export default reducer;