const skills = [
    {skill: 'Java Script'},
    {skill: 'HTML'},
    {skill: 'Node.js'},
    {skill: 'CSS'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function update(skill, id) {
    skills.splice(id, 1, skill);
}

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}