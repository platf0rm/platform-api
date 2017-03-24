class HelloController {
    index(req, res) {
        res.send('hello.index');
    };
    renderTest(req, res) {
        const to = req.params.to;
        const render = {title: "Modern JS", message: `Dear ${to} I shit my pants`};
        res.render('index', render);
    }
}

module.exports = new HelloController();