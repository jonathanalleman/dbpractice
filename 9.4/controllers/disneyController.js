
const axios = require('axios');
const express = require('express');
const router = express.Router();


async function fetchCharacterData(characterId) {
  try {
    const response = await axios.get(`https://api.disneyapi.dev/character/${characterId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching character data:', error.message);
    return null;
  }
}


router.get('/:characterId', async (req, res) => {
  const { characterId } = req.params;
  const characterData = await fetchCharacterData(characterId);

  if (!characterData) {
    return res.status(404).json({ error: 'Character not found' });
  }

  const { name, image, film } = characterData;

  res.json({ name, image, film });
});

module.exports = router;
