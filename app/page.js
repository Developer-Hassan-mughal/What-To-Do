"use client"
import React,{useState} from 'react'
import Create from '@/components/Create'
import Show from '@/components/Show'

const page = () => {

  const [title, settitle] = useState("")
  const [status, setstatus] = useState("Due")
  const [paragraph, setparagraph] = useState("")
  const [Newtask, setNewtask] = useState( JSON.parse(localStorage.getItem("Newtask")) || [])
  const [activetask, setactivetask] = useState(null)

  return (
  <div className='container px-5 py-2'   style={{backgroundColor: "white"}}>
    <div>
    <Create
          title={title}
          settitle={settitle}
          status={status}
          setstatus={setstatus}
          paragraph={paragraph}
          setparagraph={setparagraph}
          Newtask={Newtask}
          setNewtask={setNewtask}
          activetask={activetask}
          setactivetask={setactivetask}
      />

      <Show
          settitle={settitle}
          setstatus={setstatus}
          setparagraph={setparagraph}
          Newtask={Newtask}
          setNewtask={setNewtask}
          setactivetask={setactivetask}
      />

        {/* {JSON.stringify(Newtask)} */}

    </div>
  </div>
  )
}

export default page














































































// "use client"
// import React,{useState} from 'react'
// import { toast } from 'react-toastify'

// const page = () => {

//   const [title, settitle] = useState("")
//   const [status, setstatus] = useState("Due")
//   const [paragraph, setparagraph] = useState("")
//   const [Newtask, setNewtask] = useState([])
//   const [activetask, setactivetask] = useState(null)

  
//   const tasks = (e)=>{
//     e.preventDefault()
//     if(title.length<5 || paragraph.length<20){
//       toast.error(
//         "title and paragraph must contain at least 5 and 20 words",{
//           position: "top-center",
//           theme: "dark",
//           }
//       )
//       return
//     }

//     toast.success(
//       "Task Successfully created",{
//         position: "top-center",
//         theme: "light",
//         }
//     )
    
//     const task={
//       date : new Date().toLocaleDateString(),
//       time : new Date().toLocaleTimeString(),
//       title,
//       status,
//       paragraph 
//     }
//     setNewtask([...Newtask,task])
//     settitle(""),
//     setstatus("Due")
//     setparagraph("")
//   }


//   const update = (e)=>{
//     e.preventDefault()
//     if(title.length<5 || paragraph.length<20){
//       toast.error(
//         "title and paragraph must contain at least 5 and 20 words",{
//           position: "top-center",
//           theme: "dark",
//           }
//       )
//       return
//     }
//     toast.success(
//       "Task Successfully Updated",{
//         position: "top-center",
//         theme: "light",
//         }
//     )
//     const copytask = [...Newtask]
//     copytask[activetask] ={...Newtask[activetask],title,status,paragraph}
//     setNewtask(copytask)
//     setactivetask(null)  
//     settitle(""),
//     setstatus("Due")
//     setparagraph("")
//   }


//   let tasklist = <h1 style={{opacity: .5}}>Empty</h1>
  
//   let taskcount = ""
//   if(Newtask.length>0){
//     taskcount= "Total Tasks: "+ Newtask.length
//     tasklist = Newtask.map((tasks, index)=>{

//       return (
//         <div key={index} className="card shadow p-3 bg-body-tertiary rounded" style={{width: "18rem"}}>
//             <div className="card-body">
//               <h2 className="card-title">{tasks.title}</h2>
//               <p className="card-text">{tasks.paragraph}</p>
//               <h6 className="card-subtitle mb-2 text-body-secondary">{tasks.status}</h6>
//               <span>{tasks.date}</span> <br />
//               <span>{tasks.time}</span> <br />
//               <button type="button" className="btn btn-primary me-3 mt-2" onClick={()=>deleteHandler(index)}>Delete</button>
//               <button type="button" className="btn btn-secondary mt-2" onClick={()=>updateTask(index)} >Update</button>
//             </div>
//           </div>
//       )
//     })
//   }

//   const deleteHandler=(index) =>{
//     setNewtask(Newtask.filter((t,i)=>(i !==index)))
//     toast.info("Task Deleted",
//     {
//         position: "top-center",
//         theme: "colored",
//       }
//     )
//   }
//   const updateTask =(index) =>{
//     const {title,status,paragraph} =Newtask[index]
//     settitle(title)
//     setstatus(status)
//     setparagraph(paragraph)
//     setactivetask(index)
//   }

//   return (
//   <div className='container px-5 py-2'   style={{backgroundColor: "white"}}>
//     <div>
//       <h1 className='p-2'   style={{ color: 'black'}}> <span className='border border-end-0 px-2 border-3'>What </span><span className='text-white bg-info px-3'> To Do </span></h1>
//       <hr />
//       <form>
//         <input onChange={(event)=>settitle(event.target.value)} value={title} type="text" placeholder='title' name='title' />
//         <textarea onChange={(event)=>setparagraph(event.target.value)} value={paragraph} type="text" placeholder='description..' name='paragraph' cols="30" rows="3" style={{resize: "none"}}></textarea>
//         <select onChange={(event)=>setstatus(event.target.value)} value={status} className="form">
//           <option value="Due" >Due</option>
//           <option value="Pending">Pending</option>
//           <option value="Completed">Completed</option>
//         </select>
//         {activetask ===null ?
//         <button onClick={tasks} type="button" className="btn btn-primary btn-lg fs-3 mt-3" style={{fonSize :45}}>create</button>:
//         <button onClick={update}  type="button" className="btn btn-secondary btn-lg fs-3 mt-3"  style={{fonSize :45}}>Update</button>}
//       </form>
//       <hr />

//       {/* {JSON.stringify(Newtask)} */}


//         <h1 className='ms-3'>{taskcount}</h1>
//       <div className='container mt-4 gap-3 d-flex flex-wrap'>
//         {tasklist}
//       </div>
//     </div>
//   </div>
//   )
// }

// export default page