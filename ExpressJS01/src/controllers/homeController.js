const getHomepage = async (req, res) => {
    return res.render('indes.ejs')
}

module.exports = {
    getHomepage,
}