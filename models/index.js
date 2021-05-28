const path = require('path')
const User = require(path.resolve(__dirname, 'User'));
const Post = require(path.resolve(__dirname, 'Post'));
const Comment = require(path.resolve(__dirname, 'Comment'));

User.hasMany(Post, {
   foreignKey: 'user_id'
});

Post.belongsTo(User, {
   foreignKey: 'user_id',
});

 Comment.belongsTo(User, {
    foreignKey: 'user_id'
 });

 Comment.belongsTo(Post, {
    foreignKey: 'post_id'
 });

 User.hasMany(Comment, {
    foreignKey: 'user_id'
 });

 Post.hasMany(Comment, {
    foreignKey: 'post_id'
 })

module.exports = {
   User,
   Post,
   Comment
};