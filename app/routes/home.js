module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('home/index')
    });
}



//        corridasDB.consulta(connection, function (err, results) {
//            res.render('cadastro/consulta', { consulta: results });
//        });
//        connection.end();
//    });

//    app.get('/', function (req, res) {
//        res.render('cadastro/index');
//    });

//    app.get('/cadastro_motorista', function (req, res) {
//        res.render('cadastro/Cad_Moto');
//    });

//    app.get('/cadastro_cliente', function (req, res) {
//        res.render('cadastro/Cad_Cli');
//    });

//    //cadastro
//    app.get('/register_moto', function (req, res) {
//        var connection = app.infra.connectionFactory();
//        var corridasDB = app.infra.corridasDB;
//        corridasDB.addmotorista(req, connection, function (err, results) {
//            console.log(err, results);
//        });


//        console.log(req.query);
//    });
//}