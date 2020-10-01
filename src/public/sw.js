"use strict";

// self.importScripts('./util.js');

var isOnline;
var version = 170;
var cachePrefix = 'Javascript-Algorithms-Cache';
var cacheName = `${cachePrefix}-${version}`;
var urlToCache = [
	// css
	'./assets/style.css',
	'./assets/github.css',
	'./assets/split.css',
	'./assets/bass.css',
	'./assets/style.css',

	// js
	'./assets/anchor.js',
	'./assets/split.js',
	'./assets/site.js',
	'./script/algorithms/arrayAlgorithmService.js',
	'./script/algorithms/numberAlgorithmService.js',
	'./script/algorithms/stringAlgorithmService.js',
	'./script/enrichHtml.js',
	'./script/initSw.js',
	// html
	'/'
];
var onMessage = ({ data }) => {
	isOnline = (data || {}).isOnline || isOnline;
};

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", async (evt) => {

	evt.waitUntil(_waitUntil());

	async function _waitUntil() {

		await clearOutOldCaches();
		await cacheFiles();
		await clients.claim();
	}
});

self.addEventListener("message", onMessage);
self.addEventListener("fetch", onFetch);

main().catch((e) => {
	console.log(e);
});

async function main() {
	await sendMessageToClient();
	await cacheFiles();
}

async function sendMessageToClient() {
	try {

		var allClients = await clients.matchAll({
			includeUncontrolled: true,
		});

		return Promise.all(
			allClients.map(function sendTo(client) {

				var chan = new MessageChannel();
				chan.port1.onmessage = onMessage;

				return client.postMessage('what up! -from Service worker', [chan.port2]);
			})
		);

	} catch (e) {
		debugger;
	}

	return this;
}

async function clearOutOldCaches() {

	var allCaches = await caches.keys();
	var oldCachesTobeDeleted = allCaches.filter(appCache => {

		var currentCache = appCache.match(cachePrefix);

		if (currentCache) {

			var cacheVersion = appCache.match(/\d+/g);

			return cacheVersion && (version !== +cacheVersion[0]);
		}
	});

	return Promise.all(
		oldCachesTobeDeleted.map(
			oldCache => caches.delete(oldCache)
		)
	);
}

async function cacheFiles(hardRefresh = false) {

	var verstionedCache = await caches.open(cacheName);

	return Promise.all(urlToCache.map(async (url) => {

		var res;

		try {

			// from cache:
			if (!hardRefresh) {

				res = await verstionedCache.match(url);

				if (res) {

					return res;
				}
			}

			// Hard fetch
			var fetchOption = {
				method: 'GET',
				credentials: 'omit',
				cache: 'no-cache'
			};

			res = await fetch(url, fetchOption);

			if (res.ok) {

				await verstionedCache.put(url, res);
			}

		} catch (e) {

			debugger;
		}
	}));
}

async function onFetch(evt) {

	evt.respondWith(_router(evt.request));

	async function _router(request) {

		var url = new URL(request.url);
		var reqUrl = url.pathname;
		var versionCache = await caches.open(cacheName);

		if (url.origin == location.origin) {

			var res = await versionCache.match(reqUrl);

			if (res && res.ok) {

				return res.clone();
			}
		}

		try {

			var fetchOption = {
				method: 'GET',
				credentials: 'omit',
				cache: 'no-cache'
			};

			res = await fetch(url, fetchOption);

			if (res && res.ok) {

				// You can add this to cache as well..
				// await versionCache.put(url, res.clone());
				return res;
			}

			return _badRequest();

		} catch (e) {

			return _badRequest();
		}

	}

	function _badRequest() {
		return new Response('',
			{
				status: 404,
				statusText: 'Not found'
			}
		);
	}
}