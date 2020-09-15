import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'photoshop', price:'$99.00'},
    {name:'Illustrator', price:'$120.40'},
    {name: 'PDF reader', price:'$6.05'}
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames);
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        
       <Counter></Counter>
       <Users></Users>
       
      {
        products.map(pd => <Products pro={pd}></Products>)
      }
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(1) ;

  const handleIncreaser = () => setCount(count + 1);
    //setCount(count + 1)r;
    // const newCount = count + 1;
    // setCount(newCount);
    
  
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick = { () => setCount(count - 1)}>Decrease</button>
      <button onClick ={ () => setCount(count + 1)}>Increase</button>
      
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [] )

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
    <ul>
      {
      users.map(allUser => <li>{allUser.name}</li>)
      }
    </ul>
    </div>
  )
}

function Products(props){
  const productStyle = {
    border:'1px solid gray',
    margin:'10px',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'200px',
    flex:'left'
  
  }
  const{name, price} = props.pro;
  return(
    <div style={productStyle}> 
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;
