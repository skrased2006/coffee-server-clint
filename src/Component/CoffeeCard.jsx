import React from 'react';
import { Pencil, Trash, RefreshCw } from 'lucide-react';
import Swal from 'sweetalert2';
const CoffeeCard = ({coffee}) => {
    const {_id,photo,name,chef}=coffee;
    const handleDelete = (_id) =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE',
                }).then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                          });
                    }
                })

              
            }
          });

    }
    return (
        <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg max-w-md">
        <img
          src={photo}
          alt="Americano Coffee"
          className="w-20 h-28 object-cover"
        />
        <div className="flex flex-col justify-between h-full flex-1">
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Chef:</span>{chef} </p>
          <p><span className="font-semibold">Price:</span> 80৳</p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="p-2 bg-beige-300 hover:bg-beige-400 rounded">
            <RefreshCw className="w-4 h-4 text-gray-700" />
          </button>
          <button className="p-2 bg-gray-300 hover:bg-gray-400 rounded">
            <Pencil className="w-4 h-4 text-black" />
          </button>
          <button onClick={()=>handleDelete(_id)} className="p-2 bg-red-500 hover:bg-red-600 rounded">
            <Trash className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    );
};

export default CoffeeCard;