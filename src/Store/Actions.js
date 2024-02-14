




export const SearchWord=(payload)=>{
    return {
        type:"SEARCH_WORD",
        payload
    }
}

export const ListNo=(payload)=>{
    return {
        type:"No_OF_ITEM",
        payload
    }
}

export const SetPage=(payload)=>{
return{
    type:"SET_PAGE",
    payload
}
}


export const SetCurrentCategory=(payload)=>{
    return{
        type:"SET_CURRENT_CATEGORY",
        payload
    }
}


export const SetCategories=(payload)=>{
    return{
        type:"SET_CATEGORIES",
        payload
    }
}