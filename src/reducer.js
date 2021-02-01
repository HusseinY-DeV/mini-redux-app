const initState = {
    blogs : [
        {id : 1,title : "Hello World" , desc : '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ipsa velit unde, inventore molestiae quos? Et ipsam voluptates dignissimos? Repellendus molestias officia, ratione consequuntur repudiandae accusamus placeat sequi asperiores modi.' },
        {id : 2,title : "Bye World" , desc : '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ipsa velit unde, inventore molestiae quos? Et ipsam voluptates dignissimos? Repellendus molestias officia, ratione consequuntur repudiandae accusamus placeat sequi asperiores modi.' },
        {id : 3,title : "Hello Again World" , desc : '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ipsa velit unde, inventore molestiae quos? Et ipsam voluptates dignissimos? Repellendus molestias officia, ratione consequuntur repudiandae accusamus placeat sequi asperiores modi.' },    
    ]
}




export const myreducer = (state = initState,action) => 
{
    if(action.type == "ADD_BLOG") {
        return {
            ...state,
            blogs : [...state.blogs, {id : action.id,title : action.title , desc : action.desc}]
        }
    }
    return state;
}