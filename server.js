var express    =    require('express');
var app        =    express();
const PORT = process.env.PORT || 5000

// app.get('/',function(req,res){
//     res.send('Hello world');
// });

require('./router/main')(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))