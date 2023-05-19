
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffe = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste,category , details ,photo  }
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully!!',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extralight">Add cofee</h2>
            <form onSubmit={handleAddCoffe}>
                {/* form  name and quantity row */}
               <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full" />
                    </label>
                </div>
               <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" />
                    </label>
                </div>
               </div>
                {/* form supplier taste row */}
               <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="supplier" placeholder="supplier" className="input input-bordered w-full" />
                    </label>
                </div>
               <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="taste" placeholder="taste" className="input input-bordered w-full" />
                    </label>
                </div>
               </div>
                {/* form category details row */}
               <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                    </label>
                </div>
               <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
                    </label>
                </div>
               </div>
                {/* form photo url row */}
               <div className="mb-8">
              
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                    </label>
                </div>
               </div>
            
               <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;