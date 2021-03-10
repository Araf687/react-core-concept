import React,{useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'photoshop',price:'$90.99'},
    {name:'illustrator',price:'$60.99'},
    {name:'Pdf Reader',price:'$20.99'}

]
  const name=['muna',"nabab",'araf',"Opu"]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {products.map(pd=><Product product={pd}></Product>)}
        {name.map(name=><Person name={name}></Person>)}
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    backgroundColor:'lightgray',
    border:'1px solid gray',
    padding:'10px',
    height:"250px",
    width:"250px",
    borderRadius:"5px",
    float:'left',
    color:'black',
    margin:'10px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>

    </div>
  )
}
function Person(props){
  return (
  <div>
    <h1>{props.name}</h1>
  </div>)
}
function Counter()
{
  const [count,setCount]=useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h1>I am a User {users.length}</h1>
      {users.map(user=> <li>{user.name}</li>)}
  
    </div>

  )
}

export default App; 
