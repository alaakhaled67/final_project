const INIIAL_VALUE={
    searchWord:"",
    noOfItem:0,
    noOfPage:1,
    categories:[],
    currectCategory:""
};


export default function SearchReducer(state=INIIAL_VALUE,action){
    switch(action.type){
        case "SEARCH_WORD":
            return {
                ...state,
                searchWord:action.payload
            }
            case "No_OF_ITEM":
                return{
                    ...state,
                    noOfItem:action.payload
                }
            case "SET_PAGE":
                return{
                    ...state,
                    noOfPage:action.payload
                }
            case "SET_CATEGORIES":
                return{
                    ...state,
                    categories:action.payload
                }
            case "SET_CURRENT_CATEGORY":
                return{
                    ...state,
                    currectCategory:action.payload
                }
            default:
                return state;
    }
}