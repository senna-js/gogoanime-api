const express = require('express');
const router = express.Router();
const api = require('../api');

// ✅ Test route to check if API is working
router.get('/test', (req, res) => {
    res.json({ message: "API is working" });
});

// ✅ Search anime
router.get('/Search/:query', (req, res) => {
    const query = req.params.query;
    api.search(query)
        .then(search => res.status(200).json({ search }))
        .catch(() => res.status(500).json({ error: "Search failed" }));
});

// ✅ Fetch anime episode
router.get('/AnimeEpisodeHandler/:id', (req, res) => {
    const id = req.params.id;
    api.animeEpisodeHandler(id)
        .then(anime => res.status(200).json({ anime }))
        .catch(() => res.status(404).json({ error: "Episode Not Found" }));
});

// ✅ Get recent release episodes
router.get('/RecentReleaseEpisodes/:page', (req, res) => {
    const page = parseInt(req.params.page, 10);
    api.recentReleaseEpisodes(page)
        .then(anime => res.status(200).json({ anime }))
        .catch(() => res.status(500).json({ error: "Failed to load recent releases" }));
});

// ✅ Get recently added series
router.get('/RecentlyAddedSeries', (req, res) => {
    api.recentlyAddedSeries()
        .then(anime => res.status(200).json({ anime }))
        .catch(() => res.status(500).json({ error: "Failed to load recently added series" }));
});

// ✅ Get ongoing series
router.get('/OngoingSeries', (req, res) => {
    api.ongoingSeries()
        .then(anime => res.status(200).json({ anime }))
        .catch(() => res.status(500).json({ error: "Failed to load ongoing series" }));
});

// ✅ Get anime by alphabet
router.get('/Alphabet/:letter/:page', (req, res) => {
    const letter = req.params.letter.toUpperCase();
    const page = parseInt(req.params.page, 10);
    api.alphabetList(letter, page)
        .then(anime => res.status(200).json({ anime }))
        .catch(() => res.status(500).json({ error: "Failed to load anime by alphabet" }));
});

// ✅ Get new season anime
router.get('/NewSeasons/:page', (req, res) => {
    const page = parseInt(req.params.page, 10);
    api.newSeasons(page)
        .then(anime => res.status(200).json({ anime }))
        .catch(() => res.status(500).json({ error: "Failed to load new seasons" }));
});

// ✅ Get anime movies
router.get('/Movies/:page', (req, res) => {
    const page = parseInt(req.params.page, 10);
    api.movies(page)
        .then(movies => res.status(200).json({ movies }))
        .catch(() => res.status(500).json({ error: "Failed to load movies" }));
});

// ✅ Get popular anime
router.get('/Popular/:page', (req, res) => {
    const page = parseInt(req.params.page, 10);
    api.popular(page)
        .then(popular => res.status(200).json({ popular }))
        .catch(() => res.status(500).json({ error: "Failed to load popular anime" }));
});

// ✅ Get anime by genre
router.get('/Genre/:genre/:page', (req, res) => {
    const genre = req.params.genre;
    const page = parseInt(req.params.page, 10);
    api.genres(genre, page)
        .then(anime => res.status(200).json({ anime }))
        .catch(() => res.status(500).json({ error: "Failed to load anime by genre" }));
});

// ✅ Decode Vidstreaming Iframe URL
router.get('/DecodeVidstreamingIframeURL/*', (req, res) => {
    const url = req.originalUrl;
    const urlParts = url.split('/');
    const _url = `${urlParts[4].concat('/' + urlParts[5])}`.trim();
    api.decodeVidstreamingIframeURL(_url)
        .then(videos => res.status(200).json({ videos }))
        .catch(() => res.status(500).json({ error: "Failed to decode iframe URL" }));
});

module.exports = router;
