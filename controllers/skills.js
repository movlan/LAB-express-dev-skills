const Skills = require('../models/skills')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function update(req, res) {
    Skills.update(req.params.id);
    res.redirect(`/skills/${req.params.id}`);
};

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skills.getOne(req.params.id),
        idx: req.params.id        
    });
};

function deleteSkill(req, res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills')
};

function create(req, res) {
    Skills.create(req.body);
    res.redirect('/skills')
};

function newSkill(req, res) {
    res.render('skills/new');
};

function index(req, res) {
    res.render( 'skills/index', {
        skills: Skills.getAll()
    })
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    })
};