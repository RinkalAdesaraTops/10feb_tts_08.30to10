//insert 
//display
//delete
//edit
//update
let data = []
const saveData = ()=>{
    let getData = JSON.parse(localStorage.getItem('userinfo'))
    let len = getData!=null? getData.length+1 : 1
    let nm = document.getElementById('name').value
    let ag = document.frm.age.value
    let userid = document.frm.userid.value
    let sal = document.frm.salary.value
    if(userid != ''){
        //update
         let res = getData.map((i)=>{
                    if(i.id == userid){
                        i.name = nm
                        i.age = ag
                        i.salary = sal
                    }
                    return i
         })
         data = res
    } else {
        //insert
        let obj = {
            id:len,
            name:nm,
            age:ag,
            salary:sal
        }
        data.push(obj)
    }
        
      
    localStorage.setItem('userinfo',JSON.stringify(data))    

    dispData()
    document.frm.reset()
}
const dispData = ()=>{
    let tr = ''
    let a = localStorage.getItem('userinfo')
    let userData = JSON.parse(a)
    userData.map((i)=>{
        tr += `
                <tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>${i.salary}</td>
                    <td>
                    <button onclick="editData(${i.id})" class="btn btn-info">Edit</button>
                    <button onclick="delData(${i.id})" class="btn btn-danger">Delete</button>
                    </td>                   
                </tr>`
    })
    document.getElementById('alldata').innerHTML = tr
}
const delData = (id)=>{
    let a = localStorage.getItem('userinfo')
    let userData = JSON.parse(a) //5 -- 1 2  4 5
    //filter 
    let res = userData.filter((i)=>{ 
        return i.id != id
    })
    localStorage.setItem("userinfo",JSON.stringify(res))
    dispData()
}
const editData = (id)=>{
    let a = localStorage.getItem('userinfo')
    let userData = JSON.parse(a) 
    let res = userData.find((i)=>{ 
        return i.id == id
    })
    document.getElementById('name').value = res.name
    document.frm.age.value = res.age
    document.frm.salary.value = res.salary
    document.frm.userid.value = res.id   
}

dispData()