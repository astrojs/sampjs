// A sippet of javascript/jquery that should help you add a "Broadcast Table"
// functionality to your web page

// To use this, change everything that says ADAPT and have a button
// with an id sendViaSAMP somewhere on the page.
// For convenience, this uses jquery, but it wouldn't be hard to
// remove this dependency, no advanced stuff is being used.


function getVOTableURL() {
	ADAPT -- this must return the URL of a VOTable for what you are
	showing.
}

function _makeSAMPSuccessHandler(sampButton, tableURL) {
	// returns the callback for a successful hub connection
	return function(conn) {
		conn.declareMetadata([{
			"samp.description": ADAPT (what is it the user is going to see?)
			"samp.icon.url": ADAPT (a smallish logo for your web page)
		}]);

		// set the button up so clicks send again without reconnection.
		sampButton.unbind("click");
		sampButton.click(function(e) {
			sendSAMP(conn, tableURL);
		});

		// make sure we unregister when the user leaves the page
		$(window).unload(function() {
			conn.unregister();
		});

		// send the stuff once (since the connection has been established
		// in response to a click alread)
		sendSAMP(conn, tableURL);
	};
}

function connectAndSendSAMP(sampButton, tableURL) {
	samp.register(ADAPT (a short name for what you're up to)
		_makeSAMPSuccessHandler(sampButton, tableURL),
		function(err) {
			alert("Could not connect to SAMP hub: "+err);
		}
	);
}

function sendSAMP(conn, tableURL) {
	var msg = new samp.Message("table.load.votable", {
		"table-id": ADAPT,
		"url": tableURL,
		"name": ADAPT});
	conn.notifyAll([msg]);
}

$(document).ready(function() {
	var sampButton = $('#sendViaSAMP');
	var tableURL = ADAPT (the URL of the VOTable that should be sent)
	sampButton.click(function (e) {
		connectAndSendSAMP(sampButton, tableURL);
	})
});


// in the document, you'd write, at an appropriate place:
// <button id="sendViaSAMP" title="Broadcasts this table to all 
// SAMP clients on your desktop.
// This needs a fairly modern hub to work.">Send via SAMP</button>
// (or whatever else you fancy).

