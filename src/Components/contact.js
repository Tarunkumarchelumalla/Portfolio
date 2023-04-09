
import React, { useEffect, useState } from 'react'

const Contact = () => {
const[pass,setpass]=useState(true);
const [name, setName] = useState("");
const [email, setEmail] = useState("");

let displayedColumns= ['carname', 'carmodel', 'type', 'vvin','gg','yy','hh','ll'];
const arr=["#1F88E5","#673AB8", "#02897B", "#E64A19"];

const colorMapping= new Map();

if(displayedColumns.length<= arr.length){
  let i=0;
  displayedColumns.forEach(element => {
    colorMapping.set(element,arr[i++]);
  });
 
}
else{
  const cal= Math.floor(displayedColumns.length/arr.length);
  
  let g=0;
  for(let i=0;i<arr.length;i++){
    let gg=i+cal;
    while((i<gg || i===arr.length-1) && g<displayedColumns.length-1){
      colorMapping.set(displayedColumns[g],arr[i]);
      g++;
      gg--;
    }
  }
}

console.log(colorMapping);
// let i=0;
// displayedColumns.length <= arr.length? displayedColumns.forEach((v:string)=>{
//   colorMapping.set(v,arr[i++])
// }):{
  

useEffect(() => {
  // Update the document title using the browser API
 setpass(false);
},[name ,email]);
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/3d2a8496-0e38-42c8-8531-88d7bbbab050" className='flex flex-col max-w-[600px] w-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF4900] text-white'>Contact</p>
                <p className='text-white py-4'>// Submit the form this thing works i will be notified</p>
            </div>
        
            <input id="1" className='bg-white p-2' type="text" placeholder='Name' name='name' required value={name} onChange={(e) => {
                  setName(e.target.value);
                }}/>
            <input id="2"className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' required  value={email}   onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
            <textarea  id ="3" className='bg-white p-2' name="message" rows="10" placeholder='Message' required 
                  ></textarea>
            <button className='text-white border-2 hover:bg-[#FF4900] hover:border-[#FF4900] px-4 py-4 my-8 mx-auto flex items-center' >Submit</button>
        </form>
    </div>
  )
}

export default Contact