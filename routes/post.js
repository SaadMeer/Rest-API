const express = require('express');
const router = express.Router();

//Schemea File 
const Post = require('../model/Post');

//GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
})
//Here we saving the object what we get from body 

//POST OR SAVE A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }

});

router.get('/:id', async(req, res) => {
    // res.send(req.params.id);
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
});

//Update the post
router.patch('/:id', async(req, res) => {
    try {
        const updatePost =await Post.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                },
            }
        );
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
})

// Delete a Post
router.delete('/:id', async(req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.id });
        res.status(200).json(removePost)
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
})

module.exports = router;