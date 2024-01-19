const notFound = (req,res) => {
    return res.status(404).json({msg: "Page you're looking for does not exist!" })
}

module.exports = notFound;