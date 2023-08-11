import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";

const Task = ({ title, description, tag, _id}) => {

    const handleDelete = async (id)=>{

        try {
          const url = `https://olastaskserver.onrender.com/api/tasks/${id}`
          const res = await fetch(url, {
            method: 'DELETE',
          });
          const data = await res.json();
          if (data.success){
            window.location.reload();
          } 
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div>

<div className="border-bottom border-3 border-secondary-subtle pb-4 px-4 mt-4 shadow-sm">
     
      <div className="d-block d-md-flex align-items-end justify-content-between">
          <p className={tag === 'urgent'? 'red': "green"}> {tag}</p>
        <div className="mt-2 mt-lg-0 d-flex gap-4">
          <button className="blue-bg  updatebtn">
            <Link
              to={`/update/${_id}`}
              className="text-decoration-none text-white"
            >
              <MdOutlineModeEditOutline /> Edit
            </Link>{" "}
          </button>
          <button className=" border-none bg-transparent transparent delbtn"  onClick={()=>handleDelete(_id)}>
            <RiDeleteBinLine /> Delete{" "}
          </button>
        </div>
        </div>
         <h4 className="fw-bold text-capitalize">{title}</h4>
      <p>{description} </p>
    </div>

    </div>
  )
}

export default Task