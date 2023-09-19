import React from 'react'
import { toast } from 'react-toastify'



const create = (props) => {

    const{
        title,
        settitle,
        status,
        setstatus,
        paragraph,
        setparagraph,
        Newtask,
        setNewtask,
        activetask,
        setactivetask,
    } = props


    const tasks = (e)=>{
        e.preventDefault()
        if(title.length<5 || paragraph.length<20){
            toast.error(
                "title and paragraph must contain at least 5 and 20 words",
                { 
                    position: "top-center",
                    theme: "dark",
                }
            )
          return
        }
    
        toast.success(
          "Task Successfully created",{
            position: "top-center",
            theme: "light",
            }
        )
        
        const task={
          date : new Date().toLocaleDateString(),
          time : new Date().toLocaleTimeString(),
          title,
          status,
          paragraph 
        }
        setNewtask([...Newtask,task])
        localStorage.setItem("Newtask", JSON.stringify([...Newtask,task]))
        settitle(""),
        setstatus("Due")
        setparagraph("")

        setTimeout(() => {
          window.scrollTo({
            top: document.body.offsetHeight,
            behavior: 'smooth',
          });
        }, 100);
      }


      const update = (e)=>{
        e.preventDefault()
        if(title.length<5 || paragraph.length<20){
          toast.error(
            "title and paragraph must contain at least 5 and 20 words",{
              position: "top-center",
              theme: "dark",
              }
          )
          return
        }
        toast.success(
          "Task Successfully Updated",{
            position: "top-center",
            theme: "light",
            }
        )
        const copytask = [...Newtask]
        copytask[activetask] ={...Newtask[activetask],title,status,paragraph}
        setNewtask(copytask)
        localStorage.setItem("Newtask", JSON.stringify('copytask'))
        setactivetask(null)  
        settitle(""),
        setstatus("Due")
        setparagraph("")
      }




    
  return (
    <div>
            <h1 className='p-2'   style={{ color: 'black'}}> <span className='border border-end-0 px-2 border-3'>What </span><span className='text-white bg-info px-3'> To Do </span></h1>
      <hr />
      <form>
        <input onChange={(event)=>settitle(event.target.value)} value={title} type="text" placeholder='title' name='title' />
        <textarea onChange={(event)=>setparagraph(event.target.value)} value={paragraph} type="text" placeholder='description..' name='paragraph' cols="30" rows="3" style={{resize: "none"}}></textarea>
        <select onChange={(event)=>setstatus(event.target.value)} value={status} className="form">
          <option value="Due" >Due</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        {activetask ===null ?
        <button onClick={tasks} type="button" className="btn btn-primary btn-lg fs-3 mt-3" style={{fonSize :45}}>create</button>:
        <button onClick={update}  type="button" className="btn btn-secondary btn-lg fs-3 mt-3"  style={{fonSize :45}}>Update</button>}
      </form>
      <hr />
    </div>
  )
}

export default create