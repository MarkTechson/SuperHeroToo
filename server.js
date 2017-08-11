var app = require('express')();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

 var PORT = process.env.PORT || 3000;

var superHeroList = [
    {
        name: 'Captain Cucumber',
        power: 'Can Spot a Zuccini from a mile away',
        rank: 1
    },
    {
        name: 'Captain Slumber',
        power: 'Can sleep any time, any place',
        rank: 1
    }
]
 app.get('/', function (req, res) {
     res.render('index', {});
 })
app.get('/list', function (req, res) {
    res.render('list', {
        superHeroList: superHeroList
    });
});

app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`);
})