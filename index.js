

const grpc = require('grpc');
const GOPATH = process.env.GOPATH
const ampdir = GOPATH + "/src/github.com/appcelerator/amp/api/rpc"

function getService(serviceName) {
  var lname = serviceName.toLowerCase()
  var proto = grpc.load(ampdir+"/"+lname+"/"+lname+".proto")
  return new proto[lname][serviceName]('localhost:8080', grpc.credentials.createInsecure())
}

module.exports = {
  getService: getService
};
