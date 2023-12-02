'use client';
import { useState } from 'react';
function Summary({ formData }) {
  console.log("form data ",formData);
  return (
    <div id='summary'>
      <h2>Summary</h2>
     <p>Form Type:  {formData.step===2?"Form A":"Form B"}</p>
      <p>Age:{formData.age} </p>

      <p>DC Shows: </p>

      <p>Marvel Shows: {formData.dc}</p>
    </div>
  );
}
export default Summary;
