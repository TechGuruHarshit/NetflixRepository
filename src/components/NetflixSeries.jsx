import seriesData from '../api/seriesData.json';
import {SeriesCard} from './SeriesCard.jsx';
 const NetflixSeries = () => {
    return (
        <ul className="grid grid-three--cols">
            {seriesData.map((curElem) => (
                <SeriesCard key= {curElem.id} curElem={curElem}/>//agar data={curElem} hota to waha SeriesCard  me bisrc={props.data.img_url} ase likhna hota

            ) )}
           
          </ul>
      );
  };
  export default NetflixSeries;
   