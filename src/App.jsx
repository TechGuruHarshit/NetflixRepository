//  import NetflixSeries from './components/NetflixSeries';
// import'./components/Netflix.module.css';
// import "./components/Netflix.css";
// import {EventHandling} from './components/EventHandling';
//import {EventProps} from './components/EventProps';
//import "./components/EV.css";
// import {EventPropagation} from './components/EventPropagation';
//import {Bootstrap} from './components/Bootstrap';
// import {State} from './components/hooks/state';
//import DericedState from './components/DericedState';
import SeriesCard from './components/SeriesCard';
export const App = () => {
  return (
   <>
   <section className="main-div">
   {/* <h1 className="card-heading">List of best Netflix series</h1> */}
{/* <NetflixSeries />   */}
{/* <EventHandling />  */}
{/* <EventProps />  */}
{/* <EventPropagation/> */}
{/* <Bootstrap />  */}
      {/* <State />
      <Sibling/> */}
      {/* <DericedState /> */}
      <SeriesCard />
    </section>
 
    </>
    
  );
};
// export function Sibling(){
//   console.log("sibling Component rendered");
//   return (
//       <div className ="main-div">
//           <h1>Sibling component</h1>
//       </div>
//   )
//   }
