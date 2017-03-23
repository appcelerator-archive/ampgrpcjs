

const grpc = require('grpc');
const GOPATH = process.env.GOPATH
const ampdir = GOPATH + "/src/github.com/appcelerator/amp/api/rpc"

function getService(amplifierAddr, protoFilePath, serviceName) {
  var lname = serviceName.toLowerCase()
  if (protofilePath == "") {
    protofilePath= ampDir+"/"+lname+"/"+lname+".proto"
  }
  var proto = grpc.load(protofilePath)
  return new proto[lname][serviceName](amplifierAddr+":8080", grpc.credentials.createInsecure())
}

module.exports = {
  getService: getService
};
