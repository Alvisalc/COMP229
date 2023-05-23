//Imports
const helper = require('../helpers/helper.js');
// const { writeJSONFile, getNewId, newDate } = require('../helpers/helper.js');
//Variables
const filename = '../data/post.json';

//Array
let posts = require(filename);

//Read
const getPosts = ()=>{
    //All posts
    //Array is null?
    //if else
    return new Promise((resolve, reject)=>{
        //BL
        if(posts.length === 0){
            //Reject
            reject({
                message: "Sorry, No posts avaliable to display!!",
                status: 202
            })
        }else{
            //resolved
            resolve(posts)
        }
    })
}
//function getPost(id)
const getPost = (id)=>{
    //one particular post
    //index of the element by traversing through the array
    //Similar code logic array.find(r.id ==id)
    return new Promise((resolve,reject)=>{
        helper.mustBeInArray(posts, id)
        .then(post => resolve(post))
        .catch(err => reject(err))
    })
}

const insertPost = (newPost)=>{
    //insert
    //array.push() -> id should be unique -> getNewId
    return new Promise((resolve, reject)=>{
        //ID
        const id = {id: helper.getNewId(posts)}
        //Date
        const date = {
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        }
        newPost = {...id, ...date, ...newPost}

        posts.push(newPost)

        helper.writeJSONFile(filename, posts)
        resolve(newPost, 200)
    })
}

const updatePost = (id, newPost)=>{
    
    return new Promise((resolve, reject)=>{
        helper.mustBeInArray(posts, id)
        .then(post =>{
            const index = posts.findIndex(p => p.id == post.id)
            id = {id: post.id}
            const date = {
                createdAt: post.createdAt,
                updatedAt: helper.newDate()
            }
            posts[index] = {...id,...date,...newPost}
            
            helper.writeJSONFile(filename, posts)
            resolve(posts[index])
        })
        .catch(err => reject(err))
    })
}

const deletePost = (id)=>{
    return new Promise((resolve, reject)=>{
        helper.mustBeInArray(post, id)
        .then(()=>{
            posts = posts.filter(p=>p.id !== id)
            helper.writeJSONFile(filename, posts)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    insertPost,
    getPost,
    getPosts,
    updatePost,
    deletePost
}