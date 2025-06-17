export const add = 'INSERT'
export const upd = 'UPDATE'
export const del = 'DELETE'
export const addFun = (userinfo)=>{
    return {
        type:add,
        payload:userinfo
    }
}
export const delFun = (id)=>{
    return {
        type:del,
        payload:id
    }
}
export const updFun = (id,userdata)=>{
    return {
        type:upd,
        payload:{id,userdata}
        //action.payload.userid
        //action.payload.userupdateData.name
        //action.payload.userupdateData.age
        //action.payload.userupdateData.salary
    }
}