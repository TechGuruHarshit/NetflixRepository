// import styles from "./Netflix.module.css";
// import xyz from 'styled-components';
// export const SeriesCard = (props) => {//aur yaha pe props ki jigha harshit bi likh sakte ha kuch bi frk nahi padega 
//     console.log(props);
//     const {img_url,name,rating,description,genre,cast,watch_url}=props.curElem;
//     // const ButtonThapa=xyz.button({padding:"1.2rem 2.4rem",
//     //     border:"none",
//     //     fontSize:"1.6rem",
//     //     backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
//     //     color:"var(--btn-color)",
//     //     fontWeight:"bold",
//     //     cursor:"pointer"
//     // });
//     const ButtonThapa=xyz.button`
//         padding:1.2rem 2.4rem;
//         border:none;
//         font-size:1.6rem;
//         background-color:${(props)=>
//             props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
//         color:var(--btn-color);
//         font-weight:bold;
//         cursor:pointer;
//    `
//     const Rating=xyz.h3`
//     font-size:1.6rem;
//     color:#7dcea0;
//     text-transform:capitalize;
//     `;
//     const ratingClass=rating >= 8.5 ? styles.super_hit : styles.average;
    
//     return (<li className={styles.card}>
//         <div>
          
//               <img src={img_url}  height="40%" width="40%"/>
//               </div>
//               {/* <div className={styles['card-content']}> */}
//               <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
//               <h2>Name:{name}</h2>
//               <Rating>
//     Rating:
//     <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
//               </Rating>
//               <p className="text-3xl font-bold underline text-cyan-300">Summary:{description}</p>
//               <p>Genre:{genre.join(", ")}</p>
//               <p>Cast:{cast.join(", ")}</p>
//               <a href={watch_url} target="_blank">
//              {/* <button style={btn_style}>Watch now</button> */}
//              <ButtonThapa rating={rating}>Watch now</ButtonThapa>
//              </a>
//             </div>
//             </li>);
// };
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeriesCard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=398e7db4be394741b71638d6f0159c97'
        );
        setArticles(res.data.articles); // Set the fetched articles
      } catch (err) {
        console.error("Error fetching news", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Top Business News</h1>
      <div style={styles.grid}>
        {articles.map((article, index) => (
          <div key={index} style={styles.card}>
            <img src={article.urlToImage} alt={article.title} style={styles.image} />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{article.title}</h3>
              <p style={styles.description}>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline Styles for the Template
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '50px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: '0.3s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '15px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#007BFF',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '15px',
    color: '#555',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007BFF',
    padding: '10px 15px',
    borderRadius: '5px',
    display: 'inline-block',
  },
};



export default SeriesCard;
