function mustBeInteger(req, res, next) {
    const id = req.params.id;
    if (!Number.isInteger(parseInt())) {
        res.status(400).json({ message: 'ID must be in Integer' });
    } else {
        next();
    }
}

function checkFieldsPost(req, res, next){
    //use constraints to draw only three specific values from the whole body
    const {title, content, tags} = req.body
    if(title && content && tags){
        next();
    }else{
        res.status(400).json({ message: 'Fields should not be empty' });
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsPost
}