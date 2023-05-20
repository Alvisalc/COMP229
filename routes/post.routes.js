const {post} = require("./index.routes");
const router = require("./index.routes");

router.get('/', async (req, res)=>{
    await post.getPosts()
    .then(posts => res.json(posts))
    .catch(err =>{
        if (err.status){
            res.status(err.status).json({message: err.message})
        }else{
            res.status(500).json({message: err.message})
        }
    })
})

router.get('/:id', async(req, res)=>{
    const id = req.params.id
    await post.getPost(id).then(
        post=> res.json(post)
    ).catch(
        err=>{
            if(err)
                res.json({
                    message:"Oops! something went wrong",
                    status:202
                })
        }
    )
})

//test
