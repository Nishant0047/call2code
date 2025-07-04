async function fetchJokeAndImage(animal = 'cat') {
  const jokeBox = document.getElementById('joke');
  const animalImage = document.getElementById('animalImage');

  jokeBox.innerText = 'Loading joke...';
  animalImage.src = '';

  try {
    // Fetch joke
    const jokeRes = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const jokeData = await jokeRes.json();
    jokeBox.innerText = jokeData.joke;

    // Fetch animal image
    const imageUrl = animal === 'dog'
      ? 'https://api.thedogapi.com/v1/images/search'
      : 'https://api.thecatapi.com/v1/images/search';

    const imgRes = await fetch(imageUrl);
    const imgData = await imgRes.json();
    animalImage.src = imgData[0].url;
  } catch (err) {
    jokeBox.innerText = 'Oops! Something went wrong.';
    animalImage.alt = 'Failed to load image';
    console.error(err);
  }
}

// Load initial content
fetchJokeAndImage();
