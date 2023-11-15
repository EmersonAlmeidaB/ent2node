const catchError = require('../utils/catchError');
const UserCrud = require('../models/UserCrud');

const getAll = catchError(async(req, res) => {
    const usersCrud = await UserCrud.findAll();
    return res.json(usersCrud)
});

const create = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const userCrud = await UserCrud.create({
        first_name, last_name, email, password, birthday
     });
    return res.status(201).json(userCrud);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await UserCrud.destroy({where: {id}});
    return res.sendStatus(204);
})

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday} = req.body;
    const user = await UserCrud.update(
       { first_name, last_name, email, password, birthday}, 
       {where: {id}, returning: true }
    );
    return res.json(user[1][0])
})

module.exports = {
    getAll,
    create,
    remove,
    update,
}