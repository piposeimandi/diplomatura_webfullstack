var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); 

var pool = require('./models/db'); 



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*Select*/
pool.pool.query('SELECT * FROM empleados').then(function(resultados) {
  console.log(resultados);
});
/*inserta*/

var obj = {
  nombre: 'Juan',
  apellido: 'Pérez',
  email: 'juan.perez@example.com',
  edad: 30,
  salario: 50000,
  trabajo: 'Desarrollador'

};

//pool.pool.query('INSERT INTO empleados (nombre, apellido, email, edad, salario, trabajo) VALUES (?, ?, ?, ?, ?, ?)', 
//  [obj.nombre, obj.apellido, obj.email, obj.edad, obj.salario, obj.trabajo]).then(function(resultado) {
//  console.log('Empleado insertado:', resultado);
//});

/*update*/

var id=1;
var nuevoSalario=60000;

pool.pool.query('UPDATE empleados SET salario = ? WHERE id = ?', [nuevoSalario, id]).then(function(resultado) {
  console.log('Empleado actualizado:', resultado);
});


/*delete*/

// var idEliminar=2;
// pool.pool.query('DELETE FROM empleados WHERE id = ?', [idEliminar]).then(function(resultado) {
//   console.log('Empleado eliminado:', resultado);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
