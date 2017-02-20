chrome.extension.sendMessage({}, function(response) {

	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			var count = 0;

			while (document.getElementsByClassName("down").length > 0){
				var element = document.getElementsByClassName("down")[0];
				if (typeof(element) != "undefined") {
					element.click();
					count++;
				}
			}

			if (count > 0) {
				console.log(count + ' downvotes for you, my Sir!');
			}

		}
	}, 10);
});