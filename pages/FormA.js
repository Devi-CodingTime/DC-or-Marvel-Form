'use client';
import { useState } from 'react';
import Summary from './Summary';

function FormA({ onSubmit, age }) 
{
  const[dc, setDC] = useState('');
  const[formData,setFormData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    let updated = {...onSubmit};
    updated.dc=dc;
    setFormData(updated);
    console.log(dc);
  };
  return (
    
    Object.keys(formData).length>0?<Summary formData={formData}/>:<form id='dc' onSubmit={handleSubmit}>
    <h2>Form A</h2>
    <label>
      Select DC Shows:
      <select onChange={(e) => setDC(e.target.value)}>
        <option value=''>--Select--</option>
        <option value='The Flash'>The Flash</option>
        <option value='Arrow'>Arrow</option>
        <option value='Supergirl'>Supergirl</option>
        <option value='Legends of Tomorrow'>Legends of Tomorrow</option>
      </select>
    </label>
    <br />
    <label>
      Enter your age:
      <input type='number' value={age} disabled />
    </label>
    <br />
    <button id='submit-dc' type='submit'>
      Submit
    </button>
  </form>
  );
}
export default FormA;
