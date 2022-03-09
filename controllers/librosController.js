module.exports = {
    index:function (req, res) {
        res.render('libros/index', { title: 'Express' });
    }
};