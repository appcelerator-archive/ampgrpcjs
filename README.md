# ampgrpcjs

js module to access to grpc amp services


# install

 considering this module is not published as an official one, it has to be install by hand:
 - add dependency:  "grpc": "1.2.0" in your package.json
 - copy the whole project directory into node_modules, you should have a directory ./node_module/ampgrpcjs in your project

 then this module is usable as anyone, for instance:

```
const amp = require("ampgrpcjs")

client = amp.getService("localhost", "", "Stats")
client.statsQuery({stats_cpu: true}, function(err, resp) {
	console.log(resp)
})
```

# function

## getService(amplifierAddr, protofilePath, serviceName)

return a client on the "serviceName" amp service, all functions of this service are callable using it

- amplifierAddr: the address of amplifier, without port
- protofilePath: the full path of the proto file, if "", the module use a default one [ampDir]/api/rpc/service/service.proto
- serviceName: the rpc service name with the exact case as it is in proto file

Warning: service function should be call with their first letter in lower case, for instance, the function StatsQuery of the service Stats should call: client.statsQuery
