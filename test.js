
const amp = require("./index.js")

client = amp.getService("localhost", "", "Stats")
client.statsQuery({stats_cpu: true}, function(err, resp) {
	console.log(resp)
})
