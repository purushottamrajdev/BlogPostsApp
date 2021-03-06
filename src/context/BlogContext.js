
import createDataContext from './createDataContext';
const blogReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_NEW_BLOG_POST':
            return [...state,{title:`Blog Post # ${state.length+1}`}];
        default :
            return state;
    }
}
const addNewBlogPost=(dispatch)=>{
    return ()=>{
        dispatch({type:'ADD_NEW_BLOG_POST'});
    };
   
};

export const {Context,Provider} =createDataContext(blogReducer,{addNewBlogPost},[]);
