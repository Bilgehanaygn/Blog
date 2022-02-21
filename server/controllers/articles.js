const articles = require('../data/myData.json');

const getArticles = async (req,res) => {
    try{
        res.status(200).json(articles);
    }
    catch(err){
        res.status(404),json({message: err.message});
    }
}

const getSingleArticle = async (req,res) => {
    try{
        let isExist = false;
        const {id} = req.params;
        for(let i of articles.data){
            if(i.id===parseInt(id)){
                isExist = true;
                res.status(200).json(i);
            }
        }
        if(!isExist){
            res.status(404).json({message:`Article with given ID is not found, given ID is: ${id}`});
        }
    }
    catch(err){
        res.status(404).json({message:err.message});
    }
}

module.exports = {
    getArticles: getArticles,
    getSingleArticle: getSingleArticle
}