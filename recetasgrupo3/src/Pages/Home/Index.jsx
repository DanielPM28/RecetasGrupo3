import { useState, useEffect } from 'react';
import './App.css';

function Home() {
  const [cocktailName, setCocktailName] = useState('');
  const [cocktailImage, setCocktailImage] = useState('');
  const [cocktailInstructions, setCocktailInstructions] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const { drinks } = data;
        const { strDrink, strDrinkThumb, strInstructions } = drinks[0];
        setCocktailName(strDrink);
        setCocktailImage(strDrinkThumb);
        setCocktailInstructions(strInstructions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Random Cocktail Generator</h1>
      <div>
        <h2>{cocktailName}</h2>
        <p>{cocktailInstructions}</p>
        {cocktailImage && <img src={cocktailImage} alt={cocktailName} style={{ maxWidth: '200px', maxHeight: '200px' }} />}
      </div>
    </>
  );
}

export default Home;