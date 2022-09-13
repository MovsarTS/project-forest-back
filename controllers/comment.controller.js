const { json } = require('express');
const Comment = require('../models/Comment.model')

module.exports.commentController = {
    addComment: async (req, res) => {
        const { user, text } = req.body;
        try {
            const data = await Comment.create({
                user,
                text,
            });
            const result = await data.populate('user')
            res.json(result);
        } catch (error) {
            res.json(error);
        }
    },

    getAllComments: async(req,res) => {
        try {
            const data = await Comment.find().populate('user');
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    addLike: async(req,res) => {
        try {
            const data = await Comment.findByIdAndUpdate(req.params.id, {$push: {likes: req.body.id}});
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    deleteLike: async(req,res) => {
        try {
            const data = await Comment.findByIdAndUpdate(req.params.id, {$pull: {likes: req.body.id}});
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    deleteComm: async (req, res) => {
        try {
            const data = await Comment.findByIdAndDelete(req.params.id);
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
}