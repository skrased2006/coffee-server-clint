import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch('http://localhost:5000/coffees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            console.log('after adding coffee:', data);
            Swal.fire({
                title: "Coffee added sucsessfully!",
                icon: "success",
                draggable: true
              })
        }
       
    //    form.reset();
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Something went wrong!');
      });
  };

  return (
    <div className="min-h-screen bg-[#f5f4f1] flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 text-black">
        <a href="/" className="text-blue-600 font-semibold mb-4 inline-block">&larr; Back to home</a>

        <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">Add New Coffee</h2>
        <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input name="name" type="text" placeholder="Enter coffee name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Chef</label>
            <input name="chef" type="text" placeholder="Enter coffee chef" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Supplier</label>
            <input name="supplier" type="text" placeholder="Enter coffee supplier" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Taste</label>
            <input name="taste" type="text" placeholder="Enter coffee taste" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Category</label>
            <input name="category" type="text" placeholder="Enter coffee category" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Details</label>
            <input name="details" type="text" placeholder="Enter coffee details" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Photo</label>
            <input name="photo" type="text" placeholder="Enter photo URL" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>

          <div className="md:col-span-2 text-center mt-8">
            <button type="submit" className="bg-[#d2b48c] text-white font-semibold px-8 py-2 rounded-md hover:bg-[#c8a970] transition-all duration-200">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
