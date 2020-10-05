//import React from 'react';

//function App() {
//let curDate = new DaMorning';                           github pass=B4tM7ti3sGmFM5a
// cssStyle.color = 'green';
// }else if(curDate>=12 && curDate <19){
//  greeting = 'Good Afternoon';
//  cssStyle.color = 'orange';
// }else {
// greeting = 'Good Night';
//  cssStyle.color = 'Black';
// }
//  return(te (2020, 9, 17, 10);
//curDate = curDate.getHours();
//let greeting = '';
//const cssStyle = { };
 
// if(curDate >= 1 && curDate <12){
// greeting = 'Good 
//      <>
//      <div>
//          <h1> Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
//       </div>
//       </>
//    );
//}
//export default App;
___________________________________________________________________________________________________________________________________________________________________________________

//import React from 'react';
//import ReactDOM from 'react-dom';
//import {add, sub, mult, div} from './Calculator';

//ReactDOM.render(
//<>
//<ul>
//<li> The sum of two no is {add(40, 4)}</li>
//<li> The sub of two no is {sub(40, 4)}</li>
//<li> The mult of two no is {mult(40, 4)}</li>
// <li> The div of two no is {div(40, 3)}</li>
//</ul>
//</>,
//document.getElementById('root')
//);

___________________________________________________________________________________________________________________________________________________________________________________

// import React from 'react';

// function Card(props) {
//     // console.log(props);
//     return (
//       <>
//         <div className="cards">
//          <div className="card">
//           <img src={props.imgsrc} alt="my pic" className="card_img" />
//           <div className="card__info">
//            <span className="card__category"> {props.title} </span>
//            <h3 className="card__title"> {props.sname} </h3>
//            <a href={props.link} target="_blank">
//             <button> Watch Now </button>
//            </a>
//           </div>
//          </div>
//         </div>


//       </>
//     )
//   }

//   export default Card;

___________________________________________________________________________________________________________________________________________________________________________________

//    * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//     background-color: #d2dbdd;
// }


// .heading_style {
//     padding: 30px 0;
//     text-align: center;
//     font-family: "Raleway", sans-serif;
//     text-transform: uppercase;
//     font-size: 13px;
//     letter-spacing: 2px;
//     font-weight: 500;
//     color: #868686;
//     background-color: #fff;
//     font-size: 1.5rem;
//     margin-bottom: 30px;
// }

// .cards {
//     width: 100%;
//     height: auto;
// }

// .card {
//     /* margin: 25px; */
//     margin: 6%;
//     transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
//     background-color: #fff;
//     width: 21.25%;
//     border-radius: 12px;
//     box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
//     float: left;
// }

// .card:hover {
//     box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
//     transform: scale(1.05, 1.05);
// }

// .card__img {
//     width: 100%;
//     height: 235px;
//     border-top-left-radius: 12px;
//     border-top-right-radius: 12px;
// }
// .card__info {
//     background-color: #fff;
//     border-bottom-left-radius: 12px;
//     border-bottom-right-radius: 12px;
//     padding: 16px 24px 24px 24px;
//     background-color: #fff;
// }

// .card__category {
//     font-family: "raleway", sans-serif;
//     text-transform: uppercase;
//     font-size: 13px;
//     letter-spacing: 2px;
//     font-weight: 500;
//     color: #868686;
//     background-color: #fff;
// }


// .card__title {
//     margin-top: 5px;
//     margin-bottom: 10px;
//     font-family: "raleway", sans-serif;
//     background-color: #fff;
//     text-transform: capitalize;
// }

// button {
//     padding: 5px 8px;
//     font-family: "raleway", sans-serif;
//     text-transform: uppercase;
//     font-size: 13px;
//     letter-spacing: 2px;
//     font-weight: 500;
//     color: #868686;
//     background-color: #fff;
//     outline: none;
//     border: 1px solid black;
//     cursor: pointer;
// }

// @media (max-width: 768px){
//     .card{
//         float: none;
//         margin: 5%;
//         width: 90%;
//     }
// }

___________________________________________________________________________________________________________________________________________________________________________________


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from "./Card";
// import './index.css'
// import Sdata from './Sdata'

// console.log(Sdata[0].sname);

//   ReactDOM.render( 
//   <>

//   <h1 className="heading_style"> List of top 5 netflix series in 2020 </h1>

//       <Card imgsrc= {Sdata[0].imgscr}
//         title={Sdata[0].title}
//         sname = {Sdata[0].sname}
//         link = {Sdata[0].links}/>
//          <Card imgsrc= {Sdata[1].imgscr}
//         title={Sdata[1].title}
//         sname = {Sdata[1].sname}
//         link = {Sdata[1].links}/>
//          <Card imgsrc= {Sdata[2].imgscr}
//         title={Sdata[2].title}
//         sname = {Sdata[2].sname}
//         link = {Sdata[2].links}/>
//          <Card imgsrc= {Sdata[1].imgscr}
//         title={Sdata[1].title}
//         sname = {Sdata[1].sname}
//         link = {Sdata[1].links}/>
//          <Card imgsrc= {Sdata[1].imgscr}
//         title={Sdata[1].title}
//         sname = {Sdata[1].sname}
//         link = {Sdata[1].links}/>
//         </>,

//   document.getElementById('root')
//   );

___________________________________________________________________________________________________________________________________________________________________________________

// const Sdata = [


//   {
//       sname: "DARK",
//       imgscr: "https://wallpapercave.com/wp/wp4056410.jpg",
//       title: "Netflix Original Series",
//       links:  "https://www.netflix.com/in/title/80990668?source=35",
//   },

//   {
//       sname: "EXTRACURRICULAR",
//       imgscr: "https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg",
//       title: "Netflix Original Series",
//       links: "https://www.netflix.com/in/title/80990668?source=35",
//   },

//   {
//       sname: "STRANGERTHINGS",
//       imgscr: "https://wallpapercave.com/wp/wp1917154.jpg",
//       title: "Netflix Original Series",
//       links: "https://www.netflix.com/in/title/80990668?source=35"
//   }
//   ]

//   export default Sdata;

___________________________________________________________________________________________________________________________________________________________________________________


// "emmet.triggerExpansionOnTab": true,
//     "window.zoomLevel": 2,
//     "emmet.excludeLanguages": {

//         "javascript":"javascriptreact"
//     },
//     "editor.formatOnSave": true,
//     "javascript.updateImportsOnFileMove.enabled": "always",
//     "quokka.colors": {
//          "covered": "#ffa0a0",
//          "errorsource": "#fe536a",
//          "notcovered": "#cccccc",
//          "partialcovered": "#d2a032"                                                 192.168.42.174


___________________________________________________________________________________________________________________________________________________________________________________

// import React from 'react';


// const SlotM = (props) => {
//     // let x = '😄';
//     // let y = '😄';
//     // let z = '😄';
  
//     //  let x = props.x
//     //  let y = props.y
//     //  let z = props.z

//      let { x, y, z } = props;
  
//     if ( (x===y) && (y===z) ) {
//       return(
//         <>
//            <div className='slot_inner'>
  
//            <h1> {x} {y} {z} </h1>
//            <h1> This is macthing. </h1>
//            <hr />
//            </div>
  
//         </>
//       );
//     }else{
//       return(
//         <>
//            <div className='slot_inner'>
  
//            <h1> {x} {y} {z} </h1>
//            <h1> This is not macthing. </h1>
//            <hr />
//            </div>
  
//         </>
//       );
//     }
//   };
  
// export default SlotM;


___________________________________________________________________________________________________________________________________________________________________________________

// function add(a,b){
//     let sum = a+b;
//     return sum;
// }

// function sub(a,b){
//     let sub = a-b;
//     return sub;
// }

// function mult(a,b){
//     let mult = a*b;
//     return mult;
// }

// function div(a,b){
//     let div = a / b;
//     div = div.toFixed(2);
//     return div;
// }

// export {add, sub, mult, div};

___________________________________________________________________________________________________________________________________________________________________________________


// import React from 'react';
// import SlotM from './SlotMach'

// const App = () => {
//   return <>
//     <h1 className='heading_style'>
//      🎰 Welcome to <span style={{ fontWeight : "bold" }}> Slot machine game</span> 🎰 </h1>
//      <div className="slotmachine">
//     <SlotM x='😄' y='😄' z='😄'/>
//     <hr />
//     <SlotM x='😄' y='😄' z='😄'/>
//     <hr />
//     <SlotM x='🍎' y='🍌' z='🍎'/>
//     <hr />
//     <SlotM x='🥰' y='🥰' z='🥰'/>
//     </div>
//   </>;


// }

// export default App;

___________________________________________________________________________________________________________________________________________________________________________________


// import React, { useState } from 'react';



// const App = ( ) => {
//   const state = useState();

//   const [count, setcount]= useState(0);
//   console.log(state);

// const IncNum = () => {
//   setcount(count + 1);
//   // console.log('clicked' + count++ );
// };

// return(
//   <>
//     <h1> {count} </h1>
//     <button onClick={IncNum}> Click Me </button>

//   </>
// )
// }

// export default App;

___________________________________________________________________________________________________________________________________________________________________________________


// * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//     background-color: #d2dbdd;
// }
// div {
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }

// .heading_style {
//     padding: 30px 0;
//     text-align: center;
//     font-family: "Raleway", sans-serif;
//     text-transform: uppercase;
//     font-size: 13px;
//     letter-spacing: 2px;
//     font-weight: 500;
//     color: #868686;
//     background-color: #fff;
//     font-size: 1.5rem;
//     margin-bottom: 30px;
// }


//     button {
//     padding: 15px 20px;
//     text-transform: uppercase;
//     color: white;
//     background-color: #9b59b6;
//     outline: none;
//     border: 2px solid #ecf0f1;
//     cursor: pointer;
//     outline: none;
//     border-radius: 5px;
    
// }

// @media (max-width: 768px){
//     .card{
//         float: none;
//         margin: 5%;
//         width: 90%;
//     }
// } 

___________________________________________________________________________________________________________________________________________________________________________________

// import React, { useState } from 'react';



// const App = ( ) => {

// let newTime = new Date().toLocaleTimeString();

// const [ctime, setCtime] = useState(newTime);
// const UpdateTime = () => {
//   newTime = new Date().toLocaleTimeString();
//   setCtime(newTime);
// }

// setInterval(UpdateTime, 1000)
// return(
//   <>
//     <h1> {ctime} </h1>

//   </>
// );
// }

// export default 

___________________________________________________________________________________________________________________________________________________________________________________

// import React, { useState } from 'react';



// const App = ( ) => {
//   const purple = '#8e44ad';
//   const [bg, setBg] = useState(purple);
//   const [name, setName] = useState('Click Me');

// const bgChange = () => {
//   //console.log('clicked');
//   let newBg = '#34495e';
//   setBg(newBg);
//   setName("Ouch!! 🐺 ");
// };

// const bgBack = () => {
//   setBg(purple);
//   setName("Ayyo!! 💢 ");
// };

// return(
//   <>
//   <div style={{ backgroundColor: bg }}>
//     <button onMouseEnter = {bgChange} onMouseLeave={bgBack}> {name} </button>
//   </div>
//     <h1> </h1>

//   </>
// );
// }

// export default App;

___________________________________________________________________________________________________________________________________________________________________________________

// * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//     background-color: #d2dbdd;
// }
// div {
//     background: #8e44ad;
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }

// h1 {
//     color: white;
//     background: transparent;
//     text-shadow: 0 2px 2px black;
// }

//     button {
//     padding: 15px 20px;
//     text-transform: uppercase;
//     color: white;
//     background: #9b59b6;
//     outline: none;
//     border: 2px solid #ecf0f1;
//     cursor: pointer;
//     outline: none;
//     border-radius: 5px;
    
// }

___________________________________________________________________________________________________________________________________________________________________________________

// import React, {useState} from 'react';


// const App = () => {

//   const [fullName, setFullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//   });

//   const onSubmits = (event) =>{
//     event.preventDefault();
//     alert("form subnitted");
//   };

//   const inputEvent = (event) =>{
//     console.log(event.target.value);
//     console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    // const {name,value} = event.target;
    
    // setFullName((preValue) => {
    //   console.log(preValue);

    //   return{
    //     ...preValue,
    //   [name] : value,
    //   }

      // if(name === 'fName'){
      //   return {
      //   fName: value,
      //   lName: preValue.lName,
      //   email: preValue.email,
      //   phone: preValue.phone,
      // };
      // }else  if(name === 'lName'){
      //   return {
      //   fName: preValue.fName,
      //   lName: value,
      //   email: preValue.email,
      //   phone: preValue.phone,
      // };

      // }else  if(name === 'email'){
      //   return {
      //   fName: preValue.fName,
      //   lName: preValue.lName,
      //   email: value,
      //   phone: preValue.phone,
      // };
      // }else  if(name === 'phone'){
      //   return {
      //   fName: preValue.fName,
      //   lName: preValue.lName,
      //   email: preValue.email,
      //   phone: value,
      // };
      // }
//     });

//   };


//   return(
//   <>
//      <div className='main_div'>
//      <div>
//       <h1> Hello {fullName.fname} {fullName.lname} </h1>
//       <p> {fullName.email} </p>
//       <p> {fullName.phone} </p>
//       <input type='text' placeholder='Enter Your Name' 
//         name='fname'
//         onChange={inputEvent}value={fullName.fname}/>
//       <br />
//       <input type='text' placeholder='Enter Your Last Name' 
//         name='lname'
//         onChange={inputEvent}value={fullName.lname}
//       />

//       <input type='email' placeholder='Enter Your Email ' 
//         name='email'
//         onChange={inputEvent}value={fullName.email}
//         autoComplete='off'
//       />

//       <input type='number' placeholder='Enter Your Number ' 
//         name='phone'
//         onChange={inputEvent}value={fullName.phone}
//       />

//       <button onSubmit={onSubmits}> Submit Me ❤️️ </button>
      
//      </div>
//      </div>
     

//   </>
//   );
// }

// export default App;

___________________________________________________________________________________________________________________________________________________________________________________

// * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//     background-color: #d2dbdd;
// }
// div {
//     background: #8e44ad;
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }

// h1 {
//     color: white;
//     background: transparent;
//     text-shadow: 0 2px 2px black;
// }

// input {
//     width: 50%;
//     padding: 10px 20px;
//     border: none;
//     outline: none;
//     margin: 20px 0;
//     text-align: center;
// }

//     button {
//     padding: 15px 20px;
//     text-transform: uppercase;
//     color: white;
//     background: #9b59b6;
//     outline: none;
//     border: 2px solid #ecf0f1;
//     cursor: pointer;
//     outline: none;
//     border-radius: 5px;
    
// }

___________________________________________________________________________________________________________________________________________________________________________________

// import React, {useState} from 'react';
// import ToDolist from './ToDolist';

// const App = () => {

//   const [inputList, setInputList] = useState("");
//   const[items, setItems] = useState([]);

//   const itemEvent = (event) => {
//      setInputList(event.target.value);
//     };

//     const listOfItems = () => {
//       setItems((oldItems) => {
//           return [...oldItems, inputList];
//       });
//       setInputList('');
//     };

//     const deleteItems = (id) => {
//       console.log('deleted');

//       setItems((oldItems) => {
//         return oldItems.filter((arrElem, index) => {
//         return index !== id;  
//         });

//       });

//   };

//   return(
//     <>
//     <div className="main_div">
//     <div className="center_div">
//     <br />
//     <h1> ToDo List </h1>
//     <br />
//     <input type="text" placeholder='Add A Items'
//     value={inputList} onChange={itemEvent} />
//     <button onClick={listOfItems}> + </button>

//     <ol>
//       {items.map((itemval, index) => {
//         return <ToDolist
//         key={index}
//         id={index} 
//         text= {itemval}
//         onSelect={deleteItems}
//          />;
//       })}

//     </ol>
//     </div>
//     </div>


//     </>
//   )
// };


// export default App;





// import React from 'react';

// const ToDolist = (props) => {

    
//      return(
//          <>
//          <div className='todo_style'>
//          <i class="fa fa-trash" aria-hidden="true"
//              onClick={() => {
//                  props.onSelect(props.id);
//              }}
//          />
//       <li> {props.text} </li>;
//       </div>
//       </>
//      );
// };




// export default ToDolist;




// * {
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
  /* background-color: #d2dbdd; */
//   font-family: "Josefin Sans", "Arial Narrow", Arial, sans-serif;
// } 

// .main_div {
//   width: 100%;
//   height: 100vh;
//   background: #6983aa;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }

// .center_div {
//   width: 25%;
//   height: 80vh;
//   background-color: #f4f4f4;
//   box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.5);
//   border-radius: 15px;
// }

// h1 {
//   color: white;
//   background: transparent;
  /* text-shadow: 0 2px 2px black; */
//   background-color: #8566aa;
//   padding: 6px 0 2px 0;
//   margin-bottom: 10px;
//   box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.3);
// }

// input {
//   text-align: center;
//   height: 30px;
//   top: 10px;
//   background: transparent;
//   font-size: 20px;
//   font-weight: 500;
//   border: none;
//   outline: none;
//   border-bottom: 2px solid #8566aa;
//   width: 60%;
// }

//   button {
//   min-height: 40px;
//   width: 40px;
//   color: #fff;
//   background-color: #8566aa;
//   border-color: transparent;
//   border-radius: 50%;
//   font-size: 40px;
//   outline: none;
//   border: none;
//   margin-left: 10px;
//   outline: none;
//   box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.3);
  
// }

// button:hover {
//   background-color: #20bf6b;
// }

// ol {
//   margin-top: 30px;
// }

// ol li {
//   padding-left: 0px;
//   text-align: left;
//   font-size: 20px;
//   font-weight: 500;
//   min-height: 40px;
//   display: flex;
//   align-items: center;
//   color: #8566aa;
//   text-transform: capitalize;
// }

// .todo_style .fa-times {
//   width: 20px;
//   height: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #8566aa;
//   border-radius: 50%;
//   margin: 0 15px 0 35px;
//   color: aliceblue;
//   box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.3);
// }

// .todo_style {
//   display: flex;
//   flex-direction: row;
//   justify-content: left;
//   align-items: center;
// }

// .todo_style .fa-times:hover {
//   background-color: crimson;
// }

// @media (max-width: 768px) {
//   .center_div {
//       width: 55%;
// }

// .todo_style .fa-times {
//   margin: 0 15px 0 15px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// button {
//   margin-left: 5px;
//   min-height: 40px;
//   width: 40px;
//   color: #fff;
//   font-size: 30px;
// }
// }
 ___________________________________________________________________________________________________________________________________________________________________________________

//  import React from 'react';
//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    
//  const App = () => {
//    return (
//      <React.Fragment>
//       <h1 className='text-danger my-5 text-capitalize text-center'> New Latest Pics From Lorem Picsum </h1>
//       <div className="container">
//    <div className="row">
//      <div className="col-sm">
//        <div class="card">
//    <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." 
//      height='200px'
//    />
//    <div class="card-body">
//      <h5 class="card-title">Card title</h5>
//      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//      <a href="#" class="btn btn-primary">Go somewhere</a>
//    </div>
//  </div>
//      </div>
//      <div className="col-sm">
//        <div class="card">
//    <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." 
//      height='200px'
//    />
//    <div class="card-body">
//      <h5 class="card-title">Card title</h5>
//      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//      <a href="#" class="btn btn-primary">Go somewhere</a>
//    </div>
//  </div>
//      </div>
//      <div className="col-sm">
//        <div class="card">
//    <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." 
//      height='200px'
//    />
//    <div class="card-body">
//      <h5 class="card-title">Card title</h5>
//      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//      <a href="#" class="btn btn-primary">Go somewhere</a>
//    </div>
//  </div>
//      </div>
//    </div>
//  </div>
//      </React.Fragment>
//    );
//  };
 
//  export default App;

___________________________________________________________________________________________________________________________________________________________________________________