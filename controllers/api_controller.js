class ApiController {
  index(req, res) {
    res.send('api index')
  }
  not_implemented(req, res) {
    res.send('not implemented');
  }
}

module.exports = new ApiController();
