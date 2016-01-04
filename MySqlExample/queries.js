var connection = require('./database').connection;

exports.readEmployee = function(req,res){
    
    connection.query('SELECT * FROM employees',function(err,rows){
      if(err) {
          
          console.log(err);
      }

      console.log('Data received from Db:\n');
      console.log(rows);
      res.send(rows);
    });
}

exports.getEmployeeProcedure = function(req,res){
    
    connection.query('CALL getEmployees()',function(err,rows){
        console.log(err);
        res.send(rows);
    });
}

exports.getEmployeeIdProc = function(req,res){
    
    connection.query('CALL getById(?)',[req.query.id],function(err,rows){
        console.log(err);
        res.send(rows);
    });
}

exports.insertEmployee = function(req,res){
    
    var employee = { name: res.query.name, location: res.query.location };
    connection.query('INSERT INTO employees SET ?', employee, function(err,data){
      if(err) throw err;

      console.log('Last insert ID:', res.insertId);
      res.send('inserted new');
    });
}

exports.updateEmployee = function(req,res){
    
    connection.query(
      'UPDATE employees SET location = ? Where ID = ?',
      [res.query.country, res.query.id],
      function (err, result) {
        if (err) throw err;

        console.log('Changed ' + result.changedRows + ' rows');
          res.send('Nice');
      }
    );
}

exports.deleteEmployee = function(req,res){
    
    connection.query(
        'DELETE FROM employees WHERE id = ?',
        [res.query.id],
        function (err, result) {
        if (err) throw err;

        console.log('Deleted ' + result.affectedRows + ' rows');
        res.send('deleted');
        }
    );
}