// A sippet of javascript that should help you add a "Broadcast Table"
// functionality to your web page

// To use this, change everything that says ADAPT and have a button
// with an id sendViaSAMP somewhere on the page.
// For convenience, this uses jquery, but it wouldn't be hard to
// remove this dependency, no advanced stuff is being used.

SAMP_NAME = "ADAPT";
SAMP_DESCRIPTION = "ADAPT";
SAMP_ICON_URL = "ADAPT";

function getVOTableURL() {
	ADAPT -- this must return the URL of a VOTable for what you are
	showing.
}


function makeConnection(onSuccess) {
// sets up a connection to the SAMP hub; if the hub is reachable, onSuccess
// is called.  The function sets things up such that the connection is
// closed when the page is left.
	var meta = {
		"samp.name": SAMP_NAME,
		"samp.description": SAMP_DESCRIPTION,
		"samp.icon.url": SAMP_ICON_URL,
		};
	var connector = new samp.Connector("DaCHS Web", meta);
	connector.register(
		onSuccess,
		function(err) {
			alert("Could not connect to SAMP hub: "+err);
		});
}


function connectAndSendSAMP(sampButton, tableSource) {
	makeConnection(function(conn) {
		sampButton.unbind("click");
		$(window).unload(function() {
			conn.unregister();
		});
		sampButton.click(function(e) {
			sendSAMP(conn, tableSource);
		});
		sendSAMP(conn, tableSource);
	});
}


function sendSAMP(conn, tableSource) {
	var msg = new samp.Message("table.load.votable", {
		"table-id": "ADAPT",
		"url": getVOTableURL(),
		"name": "ADAPT"});
	conn.notifyAll([msg]);
}


$(document).ready(function() {
	var sampButton = $('#sendViaSAMP');
	sampButton.click(function (e) {
		connectAndSendSAMP(sampButton);
	})
});

