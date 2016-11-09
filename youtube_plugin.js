
var util = require('util');
var youtube_node = require('youtube-node');
var auth = require("./auth.json");


function YoutubePlugin () {
	this.youtube = new youtube_node();
	this.youtube.setKey(auth.youtube_api_key);
	this.youtube.addParam('type', 'video');
};


YoutubePlugin.prototype.respond = function (query, channel, bot) {
	this.youtube.search(query, 1, function(error, result) {
			if (error) {
				channel.sendMessage("video not found");
			}
			else {
				if (!result || !result.items || result.items.length < 1) {
					channel.sendMessage("¯\\_(ツ)_/¯");
				} else {
					channel.sendMessage("http://www.youtube.com/watch?v=" + result.items[0].id.videoId );
				}
			}
		});

};


module.exports = YoutubePlugin;
