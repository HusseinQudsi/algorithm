(async function ($window, $util) {
	"use strict";

	if ("serviceWorker" in navigator) {

		var swRegistration;
		var svcworker;
		var util;
		var isOnline = ("onLine" in navigator) && navigator.onLine;

		try {

			swRegistration = await navigator.serviceWorker.register("./sw.js", {
				updateViaCache: "none",
			});

			svcworker = swRegistration.installing || swRegistration.waiting || swRegistration.active;

			util = $util();

			navigator
				.serviceWorker
				.addEventListener("controllerchange", async () => {

					svcworker = navigator.serviceWorker.controller;
					util.sendMessageToServiceWorker(svcworker);
				});

			navigator
				.serviceWorker
				.addEventListener("message", (evt) => {

					console.log('=============\nScript:initSW, from service_worker\n=================––');
					util.sendMessageToServiceWorker(svcworker, { isOnline });

				}, false);

			addOnLineOffLineListner();

		} catch (e) {
			debugger;
		}
	}

	function addOnLineOffLineListner() {

		window.addEventListener("online", function online() {

			isOnline = true;
			util.sendMessageToServiceWorker(svcworker, { isOnline });
		}, false);

		window.addEventListener("offline", function offline() {

			isOnline = false;
			util.sendMessageToServiceWorker(svcworker, { isOnline });
		}, false);
	}

})(window, function util() {

	return {
		sendMessageToServiceWorker,
	};

	function sendMessageToServiceWorker(svcworker, msg) {

		svcworker.postMessage(msg || {});
	}
});