
import './App.css';

function App() {
  const handleSave ={

  }
  return (
    <div className="sele ">
      <div className=" mt-48 flex items-center">
      <div className="names ml-5">
       <h2>Name</h2>
      </div>

      <div className="inp ml-5">
          <input type="text" placeholder="Name here" className="input input-bordered input-info w-full max-w-xs" required />
       </div>

      </div>
     
      
   <div className="selected-items  flex">
   <div className="names ml-5 mt-6">
       <h2>Selectors:</h2>
      </div>
  <div className=" w-1/2 ml-6 mt-6 mb-6">
  <form action="">
      <select size="15" class="form-select w-full menu" id="autoSizingSelect" name="sector">
      <optgroup label="Manufacturing " className='ml-5 mt-3'>
      <option value="2">Construction materials</option>
      <option value="2">Electronics</option>
      </optgroup>
      <optgroup label="Furniture"className='ml-5 mt-3'>
      <option value="2">Kichen</option>
      <option value="2">Bathroom</option>
      <option value="2">Bad Room</option>
      <option value="2">Office  Room</option>
      <option value="2">Other  Room</option>
      <option value="2">Outdoor</option>
      </optgroup>
      <optgroup label="Food"className='ml-5 mt-3'>
      <option value="2">Fish</option>
      <option value="2"> Milk</option>
      <option value="2">Dairy Products</option>
      <option value="2">Sweet Snck Food</option>
      </optgroup>
      <optgroup label="Service"className='ml-5 mt-3'>
      <option value="2">Business Service</option>
      <option value="2">Engineering</option>
      <option value="2">Hospital</option>
      <option value="2">Study</option>
      </optgroup>
      <optgroup label="Machinery"className='ml-5 mt-3'>
      <option value="2">Machinery Component</option>
      <option value="2">Machinery Equipment</option>
      <option value="2">Metal Structure</option>
      <option value="2">Tools</option>
      </optgroup>
      <optgroup label="Metal Working"className='ml-5 mt-3'>
      <option value="2">Construction of materials Structure</option>
      <option value="2">House & Building</option>
      <option value="2">Metal Products</option>
      <option value="2">Metal Works</option>
      </optgroup>
      <optgroup label="Printing"className='ml-5 mt-3'>
      <option value="2">Advertising</option>
      <option value="2">Book</option>
      <option value="2">Labelling & packaging</option>
      </optgroup>
      </select>
      <div className="form-control w-20">
  <label className="cursor-pointer label">
    <span className="label-text">Agree</span>
    <input type="checkbox" className="checkbox checkbox-error" />
  </label>
</div>
<div className="btnn">
<button onClick={'handleSave'} className="btn btn-primary">Save</button>
</div>
    </form>

  </div>
   </div>
    </div>
  );
}

export default App;
