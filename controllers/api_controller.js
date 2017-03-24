class ApiController {
  index(req, res) {
    res.send('api index')
  }
}

module.exports = new ApiController();
