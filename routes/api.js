/*
  * Big Thanks To
  * DannTeam
  * Lazycode
  * Programmer Indonesia
*/

require('../controllers/settings');
require('../controllers/message');

__path = process.cwd();

const express = require('express');
const router = express.Router();
const request = require('request');
const fs = require('fs');
const fetch = require('node-fetch');
const scr = require('@bochilteam/scraper');
const api = require('hxz-api');
const scraper = require('api-dylux');
const { Configuration, OpenAIApi } = require('openai');
const axios = require('axios');
const sharp = require('sharp');

// Lib
const {
    fetchJson,
    getBuffer
} = require('../lib/function');

// Database
const {
    limitMin,
    isLimit,
    checkKey
} = require('../database/function');

// Scrape data
const scrape = require('../scrape/index');

// API Key
const keyfree = key_free;
const keypremium = key_premium;

// Features
// Downloader
router.get('/downloader/youtube-play', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.youtube.play(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
	limitMin(apikey);
})

router.get('/downloader/youtube-play-audio', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.youtube.playaudio(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/youtube-play-video', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.youtube.playvideo(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/youtube-audio', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.youtube.audio(url)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/youtube-video', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.youtube.video(url)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/tiktok', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.tiktok(url)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/facebook', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    api.fbdown(url)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
    })
  })
    limitMin(apikey);
})

router.get('/downloader/instagram', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    await scr.instagramdl(url).catch(async _ => await scr.instagramdlv2(url)).catch(async _ => await scr.instagramdlv3(url)).catch(async _ => await scr.instagramdlv4(url))
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/twitter', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.twitter(url)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/mediafire', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.mediafire(url)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/sfilemobi', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.sfilemobi(url)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/downloader/soundcloud', async (req, res, next) => {
	let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.downloader.soundcloud(url)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

// Asupan
router.get('/asupan/video/random', async (req, res, next) => {
    const apikey = req.query.apikey
	if (!apikey) return res.json(msg.paramkey)
	if (!keypremium.includes(apikey)) return res.render('not-apikey-premium', { layout: 'not-apikey-premium' })
	
	const data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/video/random.json'));
    const rv = data[Math.floor(Math.random() * data.length)];
    result = await fetch(rv).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupan.mp4', result)
    res.sendFile(__path +'/tmp/asupan.mp4')
})

router.get('/asupan/image/random', async (req, res, next) => {
    const apikey = req.query.apikey
	if (!apikey) return res.json(msg.paramkey)
	if (!keypremium.includes(apikey)) return res.render('not-apikey-premium', { layout: 'not-apikey-premium' })
	let data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/image/random.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
})

router.get('/asupan/image/china', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    const data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/image/china.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitMin(apikey);
})

router.get('/asupan/image/indonesia', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    const data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/image/indonesia.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitMin(apikey);
})

router.get('/asupan/image/japan', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    const data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/image/japan.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitMin(apikey);
})

router.get('/asupan/image/korean', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    const data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/image/korean.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitMin(apikey);
})

router.get('/asupan/image/malaysia', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    const data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/image/malaysia.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitMin(apikey);
})

router.get('/asupan/image/thailand', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    const data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/image/thailand.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitMin(apikey);
})

router.get('/asupan/image/vietnam', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    const data = JSON.parse(fs.readFileSync(__path +'/scrape/data/asupan/image/vietnam.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitMin(apikey);
})

// Search
router.get('/search/youtube', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    //if (!keypremium.includes(apikey)) return res.render('not-apikey-premium', { layout: 'not-apikey-premium' })
    
    scrape.search.youtube(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/joox', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.joox(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/sfilemobi', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.sfilemobi(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/moddroid', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.moddroid(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/apkmody', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.apkmody(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/happymod', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.happymod(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/group-whatsapp', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.groupwa(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/sticker', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.sticker(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/wallpaper', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.wallpaper(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/ringtone', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.ringtone(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/pinterest', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.pinterest(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/wikimedia', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.wikimedia(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/otakudesu', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    api.otakudesu(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/chatgpt', async (req, res, next) => {
	const query = req.query.q;
	if (!query) return res.json(msg.paramquery);
    const apikey = req.query.apikey;
    if (!apikey) return res.json(msg.paramkey);
    const check = await checkKey(apikey);
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' });
    const limit = await isLimit(apikey);
    if (limit) return res.render('limit', { layout: 'limit' });
   const configuration = new Configuration({
    apiKey: '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'});
    var openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({ 
            model: "text-davinci-003",
            prompt: query,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
    });

	res.json({
    status: "Success",
    code: 200,
    author: author,
    data: response.data.choices[0].text
 })
	limitMin(apikey);
})

router.get('/search/kodepos', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.kodepos(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/ffstalk', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.ffstalk(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/mlstalk', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.mlstalk(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/npmstalk', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.npmstalk(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

router.get('/search/githubstalk', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.search.githubstalk(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

// Text Pro
router.get('/textpro/hologram-color', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/hologram-color-3d-text-effect-generator-online-1117.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/luxury-crystal', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-luxury-3d-crystal-text-effects-online-1116.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/metallic', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-3d-metallic-text-with-details-online-1108.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/grunge-metallic', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/liquid-metal', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-3d-liquid-metal-text-effect-1112.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/multicolor-paint', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/pink-gold', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-pink-soft-gold-text-effect-online-1113.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/burger', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-burger-3d-text-effect-1111.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/cage', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-cage-text-effect-online-1110.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/comic', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-3d-comic-text-effects-online-1091.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/neon-light', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/neon-light-text-effect-online-882.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/neon-light-2', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/gradient-neon-light', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/orange-juice', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/valentine', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-realistic-golden-text-effect-on-red-sparkles-online-1082.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/pencil', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-a-sketch-text-effect-online-1044.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/berry', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-berry-text-effect-online-free-1033.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/blackpink', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/bear-logo', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/christmas', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/3d-christmas-text-effect-by-name-1055.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/thunder', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/box-text', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/3d-box-text-effect-online-880.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/green-horor', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-green-horror-style-text-effect-online-1036.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/magma-hot', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/chocolate-cake', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/chocolate-cake-text-effect-890.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/strawberry', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/strawberry-text-effect-online-889.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/glitch', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/glitch-2', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    const text2 = req.query.text2
    if (!text2) return res.json(msg.paramtext2)
    
    scrape.textpro('https://textpro.me/create-a-glitch-text-effect-online-free-1026.html', [text,text2])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/glitch-tiktok', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    const text2 = req.query.text2
    if (!text2) return res.json(msg.paramtext2)
    
    scrape.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [text,text2])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/video-game-classic', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    const text2 = req.query.text2
    if (!text2) return res.json(msg.paramtext2)
    
    scrape.textpro('https://textpro.me/video-game-classic-8-bit-text-effect-1037.html', [text,text2])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/marvel-studios', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    const text2 = req.query.text2
    if (!text2) return res.json(msg.paramtext2)
    
    scrape.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', [text,text2])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/textpro/ninja-logo', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    const text2 = req.query.text2
    if (!text2) return res.json(msg.paramtext2)
    
    scrape.textpro('https://textpro.me/create-ninja-logo-online-935.html', [text,text2])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

// Photo Oxy
router.get('/photooxy/flaming', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/night-sky', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/shadow-sky', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/burn-paper', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/under-grass', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/under-watter', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/under-white', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/coffe-cup', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/neon-glow', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/rainbow-shine', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/army-camouflage', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/glow-text', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/create-a-3d-glowing-text-effect-220.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/candy-text', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/honey-text-effect-218.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/vintage', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/other-design/vintage-text-style-219.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/gradient-avatar', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/fur-text', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

router.get('/photooxy/striking', async (req, res, next) => {
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    const text = req.query.text
    if (!text) return res.json(msg.paramtext)
    
    scrape.photooxy('https://photooxy.com/other-design/striking-3d-text-effect-online-187.html', [text])
    .then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
    limitMin(apikey);
})

// Canvas
router.get('/canvas/welcome', async (req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const name = req.query.name
	if (!name) return res.json({ status : false, author : `${author}`, message : "Enter Name"})
	const gcname = req.query.groupname
	if (!gcname) return res.json({ status : false, author : `${author}`, message : "Enter Group Name"})
	const member = req.query.member
	if (!member) return res.json({ status : false, author : `${author}`, message : "Enter Members Amount"})
	const pp = req.query.profilepicture
	if (!pp) return res.json({ status : false, author : `${author}`, message : "Enter Pp Url"})
	const bg = req.query.background
	if (!bg) return res.json({ status : false, author : `${author}`, message : "Enter Background Url"})
	const ppgc = req.query.ppgroup
	if (!ppgc) return res.json({ status : false, author : `${author}`, message : "Enter Pp Group Url"})
	
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/canvas/welcome/1.json'))
	let result = {
		url: `${baseURL}?name=${name}&gcname=${gcname}&pp=${pp}&bg=${bg}&membercount=${member}&gcicon=${ppgc}`,
		method: 'GET',
		encoding: null
	};
	
	request(result, function(error, response, body) {
		res.set('Content-Type', 'image/png')
		res.send(body)
	})
	limitMin(apikey)
})

router.get('/canvas/welcome-2', async (req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const name = req.query.name
	if (!name) return res.json({ status : false, author : `${author}`, message : "Enter Name"})
	const gcname = req.query.groupname
	if (!gcname) return res.json({ status : false, author : `${author}`, message : "Enter Group Name"})
	const member = req.query.member
	if (!member) return res.json({ status : false, author : `${author}`, message : "Enter Members Amount"})
	const pp = req.query.profilepicture
	if (!pp) return res.json({ status : false, author : `${author}`, message : "Enter Profile Picture Url"})
	const bg = req.query.background
	if (!bg) return res.json({ status : false, author : `${author}`, message : "Enter Background Url"})
	
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/canvas/welcome/2.json'))
	let result = {
		url: `${baseURL}?name=${name}&gcname=${gcname}&pp=${pp}&bg=${bg}&membercount=${member}`,
		method: 'GET',
		encoding: null
	};
	
	request(result, function(error, response, body) {
		res.set('Content-Type', 'image/png')
		res.send(body)
	})
	limitMin(apikey)
})

router.get('/canvas/welcome-3', async (req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const name = req.query.name
	if (!name) return res.json({ status : false, author : `${author}`, message : "Enter Name"})
	const gcname = req.query.groupname
	if (!gcname) return res.json({ status : false, author : `${author}`, message : "Enter Group Name"})
	const member = req.query.member
	if (!member) return res.json({ status : false, author : `${author}`, message : "Enter Members Amount"})
	const pp = req.query.profilepicture
	if (!pp) return res.json({ status : false, author : `${author}`, message : "Enter Pp Url"})
	const bg = req.query.background
	if (!bg) return res.json({ status : false, author : `${author}`, message : "Enter Background Url"})
	
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/canvas/welcome/3.json'))
	let result = {
		url: `${baseURL}?name=${name}&gcname=${gcname}&pp=${pp}&bg=${bg}&membercount=${member}`,
		method: 'GET',
		encoding: null
	};
	
	request(result, function(error, response, body) {
		res.set('Content-Type', 'image/png')
		res.send(body)
	})
	limitMin(apikey)
})

router.get('/canvas/goodbye', async (req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const name = req.query.name
	if (!name) return res.json({ status : false, author : `${author}`, message : "Enter Name"})
	const gcname = req.query.groupname
	if (!gcname) return res.json({ status : false, author : `${author}`, message : "Enter Group Name"})
	const member = req.query.member
	if (!member) return res.json({ status : false, author : `${author}`, message : "Enter Members Amount"})
	const pp = req.query.profilepicture
	if (!pp) return res.json({ status : false, author : `${author}`, message : "Enter Pp Url"})
	const bg = req.query.background
	if (!bg) return res.json({ status : false, author : `${author}`, message : "Enter Background Url"})
	
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/canvas/goodbye/1.json'))
	let result = {
		url: `${baseURL}?name=${name}&gcname=${gcname}&pp=${pp}&bg=${bg}&membercount=${member}`,
		method: 'GET',
		encoding: null
	};
	
	request(result, function(error, response, body) {
		res.set('Content-Type', 'image/png')
		res.send(body)
	})
	limitMin(apikey)
})

router.get('/canvas/goodbye-2', async (req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const name = req.query.name
	if (!name) return res.json({ status : false, author : `${author}`, message : "Enter Name"})
	const pp = req.query.profilepicture
	if (!pp) return res.json({ status : false, author : `${author}`, message : "Enter Pp Url"})
	const bg = req.query.background
	if (!bg) return res.json({ status : false, author : `${author}`, message : "Enter Background Url"})
	const desc = req.query.description
	if (!desc) return res.json({ status : false, author : `${author}`, message : "Enter Description"})
	
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/canvas/goodbye/2.json'))
	let result = {
		url: `${baseURL}?name=${name}&pp=${pp}&bg=${bg}&desk=${desc}`,
		method: 'GET',
		encoding: null
	};
	
	request(result, function(error, response, body) {
		res.set('Content-Type', 'image/png')
		res.send(body)
	})
	limitMin(apikey)
})

// Maker
/*
router.get('/maker/ttp', async (req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const text = req.query.text
	if (!text) return res.json(msg.paramtext)
	
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/ttp/1.json'))
	const token = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/ttp/token.json'))
	let result = {
		url: `${baseURL}?text=${text}&apikey=${token}`,
		method: 'GET',
		encoding: null
	};
	
	request(result, function(error, response, body) {
		res.set('Content-Type', 'image/png')
		res.send(body)
	})
	limitMin(apikey)
})

router.get('/maker/attp', async (req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const text = req.query.text
	if (!text) return res.json(msg.paramtext)
	
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/attp/1.json'))
	const token = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/attp/token.json'))
	let result = {
		url: `${baseURL}?text=${text}&apikey=${token}`,
		method: 'GET',
		encoding: null
	};
	
	request(result, function(error, response, body) {
		res.set('Content-Type', 'image/gif')
		res.send(body)
	})
	limitMin(apikey)
})
*/

router.get('/maker/ttp', async(req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const text = req.query.text
	if(!text) return res.json(msg.paramtext)
	
	//https://saipulanuar.ga/api/maker/ttp2?text=Bear
	/*
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/ttp/1.json'))
	const token = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/ttp/token.json'))
	*/
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/ttp/2.json'))
	let result = `${baseURL}?text=${text}`
	data = await fetch(result).then(v => v.buffer())
	await fs.writeFileSync(__path + '/tmp/ttp.png', data)
	res.sendFile(__path + '/tmp/ttp.png')
	limitMin(apikey)
})

router.get('/maker/attp', async(req, res, next) => {
	const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
	const text = req.query.text
	if(!text) return res.json(msg.paramtext)
	
	//https://saipulanuar.ga/api/maker/attp3?text=Bear
	/*
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/attp/1.json'))
	const token = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/attp/token.json'))
	*/
	const baseURL = JSON.parse(fs.readFileSync(__path + '/scrape/data/maker/attp/2.json'))
	let result = `${baseURL}?text=${text}`
	data = await fetch(result).then(v => v.buffer())
	await fs.writeFileSync(__path + '/tmp/attp.gif', data)
	res.sendFile(__path + '/tmp/attp.gif')
	limitMin(apikey)
})

router.get('/maker/jadianime', async(req, res, next) => {
    let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
let anu = await fetch(`https://phototoanime.p.rapidapi.com/draw?rapidapi-key=483a43ea44msh8c4eb252ee8a575p1555b6jsn6b09fae7a517&url=${url}`)
	res.set({'Content-Type': 'image/png'})
    let buffer = await anu.buffer();
    res.send(buffer);
    limitMin(apikey)
 })

router.get('/maker/jadizombie', async(req, res, next) => {
    let url = req.query.url
	if (!url) return res.json(msg.paramurl)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
let anu = await fetch(`https://api.zahwazein.xyz/photoeditor/jadizombie?url=${url}&apikey=zenzkey_dad711c681`)
	res.set({'Content-Type': 'image/png'})
    let buffer = await anu.buffer();
    res.send(buffer);
    limitMin(apikey)
 })

// Anime
router.get('/anime/manga', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    const apikey = req.query.apikey
    if (!apikey) return res.json(msg.paramkey)
    const check = await checkKey(apikey)
    if (!check) return res.render('not-apikey', { layout: 'not-apikey' })
    const limit = await isLimit(apikey)
    if (limit) return res.render('limit', { layout: 'limit' })
    
    scrape.anime.manga(query)
	.then(data => {
		let result = data;
		if (!result) res.json(msg.nodata)
		res.json({
			status: "Success",
			code: 200,
			author: author,
			data: result
		})
	})
    limitMin(apikey);
})

module.exports = router;