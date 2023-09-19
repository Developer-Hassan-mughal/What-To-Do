import React,{useEffect} from 'react'
import { toast } from "react-toastify";


const show = (props) => {

    const{
        settitle,
        setstatus,
        setparagraph,
        Newtask,
        setNewtask,
        setactivetask,
    }=props

    useEffect(() => {
      localStorage.setItem("Newtask", JSON.stringify([...Newtask]))
      }, [Newtask])

    
    const deleteHandler = (index) =>{
      localStorage.clear("Newtask")
      setNewtask(Newtask.filter((t,i)=>(i !==index)))
      localStorage.setItem("Newtask", JSON.stringify([...Newtask]))


        toast.info("Task Deleted",
        {
            position: "top-center",
            theme: "colored",
          }
        )
      }
      
      const updateTask =(index) =>{
        const {title,status,paragraph} =Newtask[index]
        settitle(title)
        setstatus(status)
        setparagraph(paragraph)
        setactivetask(index)
          window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
      }

      
  let tasklist = <h1 style={{opacity: .5}}>Empty</h1>

  let taskcount = ""
  if(Newtask.length>0){
    taskcount= "Total Tasks: "+ Newtask.length
    tasklist = Newtask.map((tasks, index)=>{

      return (
        <div key={index} className="card shadow p-3 bg-body-tertiary rounded" style={{width: "18rem"}}>
            <div className="card-body">
              <h2 className="card-title">{tasks.title}</h2>
              <p className="card-text">{tasks.paragraph}</p>
              <h6 className="card-subtitle mb-2 text-body-secondary">{tasks.status}</h6>
              <span>{tasks.date}</span> <br />
              <span>{tasks.time}</span> <br />
              <button type="button" className="btn btn-primary me-3 mt-2" onClick={()=>deleteHandler(index)}>Delete</button>
              <button type="button" className="btn btn-secondary mt-2" onClick={()=>updateTask(index)} >Update</button>
            </div>
          </div>

          
      )
    })
  }


  return (
    <div>

    <h1 className='ms-3'>{taskcount}</h1>
      <div className='container mt-4 gap-3 d-flex flex-wrap'>
        {tasklist}
      </div>

    </div>
  )
}

export default show