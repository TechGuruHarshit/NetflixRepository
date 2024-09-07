import "./EV.css";
export const EventProps =()=>{
    const HandleWelcomeUser=(user)=>{
        alert(`Hey,${user}`);
    };

    const handleHover=()=>{
        alert(`Hey Thanks for hovering me`);
    };
    return (
    <>
   <WelocomeUser xyz={()=>HandleWelcomeUser("Harshit")} onMouseEnter={handleHover}/> 
    {/* tho prop passes here */}
    </>
    );
};
//  in this 1 parent component EventProps and 1 child component in child component 2 props passes as event (onclick
// and on mouse enter)
const WelocomeUser =(props)=>{
    // const {onbuttonClick,onMouseEnter}=props;
  const handlegreeting =()=>{
  console.log(`Hey Thanks user`);
  props.xyz();
    };
    return (
    <>
    <button onClick={props.xyz}>click me</button>
    <button onMouseEnter={props.onMouseEnter}>Hover me</button>
    <button onClick={handlegreeting}>Greetings</button>
    </>
    );
};
