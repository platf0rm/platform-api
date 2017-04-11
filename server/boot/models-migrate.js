module.exports = function(server) {
  const ds = server.dataSources.db;
  const storage = server.dataSources.db;
  storage.autoupdate(function (err) {
    if (err) throw err;
    console.log('Loopback tables created in ', ds.adapter.name);
  });
};