/*
const grpc = require('grpc');
const GOPATH = process.env.GOPATH
const ampdir = GOPATH + "/src/github.com/appcelerator/amp/api/rpc"

//var proto = grpc.load("stats.proto")
var proto = grpc.load(ampdir+"/stats/stats.proto")
console.log(proto)
var client = new proto.stats.Stats('localhost:8080', grpc.credentials.createInsecure())
console.log(client)
client.statsQuery({stats_cpu: true}, function(err, resp) {
	console.log(resp)
})
*/

const amp = require("./index.js")

client = amp.getService("Stats")
client.statsQuery({stats_cpu: true}, function(err, resp) {
	console.log(resp)
})
