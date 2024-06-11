const connection = require('./conn');

function getAllUsers(callback) {
  connection.query('SELECT * FROM usuarios', (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function getUserById(id, callback) {
  connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results[0]);
  });
}

function getUserByLoginPass(email, senha, callback) {
  connection.query('SELECT email,senha FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function addUser(user, callback) {
  connection.query('INSERT INTO usuarios SET ?', user, (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results.insertId);
  });
}

function updateUser(id, user, callback) {
  connection.query('UPDATE usuarios SET ? WHERE id = ?', [user, id], (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results.affectedRows);
  });
}

function deleteUser(id, callback) {
  connection.query('DELETE FROM usuarios WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results.affectedRows);
  });
}


function getUserByEmailAndPassword(email, senha, callback) {
  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  connection.query(query, [email, senha], (error, results) => {
      if (error) {
          return callback(error, null);
      }
      callback(null, results[0]);
  });
}


function addRental(rentalData, callback) {
  const query = 'INSERT INTO alugueis SET ?'; 
  connection.query(query, rentalData, (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results.insertId);
  });
}


module.exports = {
  getAllUsers,
  getUserById,
  getUserByLoginPass,
  addUser,
  updateUser,
  deleteUser,
  getUserByEmailAndPassword,
  addRental
};
