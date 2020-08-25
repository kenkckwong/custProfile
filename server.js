var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api-endpoint', function(request, response) {
    var docNoString = request.query.docno;
    
      var jsonContent = { 
            docNo: docNoString,
            creditCheckResult: {blacklist: true, overdue: true, inservicemrt: true},
            profileContent: {title: "Stanley Ng", verified: "Non-verified", profileIcon: "https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png"},
            customTag: [{"id":"1", "title":"Blacklisted" },
                        {"id":"2", "title":"ID Verified" }],
            basicInformation:{"firstTitle":"Date of Birth","firstContent":"3yr 10mo","secondTitle":"Doc Type/ID","secondContent":"HKID Y1234567(A)"},
            miltiContents:[{"id":"1","firstTitle":"Tenure","firstContent":"25-Oct-1987","secondTitle":"Doc Type/ID","secondContent":"HKID Y1234567(A)"}],
        };
    
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send(JSON.parse(JSON.stringify(jsonContent)));
    
});


app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
