const mongoose = require("mongoose")
const User = require("../models/User");

module.exports = {
    getUser: async (req, res) => {
        const id = req.params.id.toUpperCase()
        try {
            let user = await User.findOne({ ID: id })
            res.json({ id: user.ID.toLowerCase(), firstName: user.FirstName, lastName: user.LastName })
        } catch (err) {
            console.log(err)
            res.status(500).json(`Server error`)
        }
    },
    getUsers: async (req, res) => {
        // Page starts at 0 or 1 ?
        const page = Number(req.params.page)
        const pageSize = Number(req.params.pageSize)
        try {
            let users = await User.find()
            let numberOfPages = Math.ceil(users.length / pageSize)
            if (page < 0 || page > numberOfPages) { res.status(404).json(`Page out of bounds - 0-${numberOfPages}`) }
            else {
                usersOuput = {
                    users: users
                        .slice(page * pageSize, (page + 1) * pageSize)
                        .map(e => {
                            return {
                                id: e.ID,
                                firstName: e.FirstName,
                                lastName: e.LastName
                            }
                        })
                }
                res.json(usersOuput)
            }
        } catch (err) {
            console.log(err)
            res.status(500).json(`Server error`)
        }
    },
    updateUser: async (req, res) => {
        const id = req.params.id.toUpperCase()
        let { firstName, lastName } = req.body // Will consider that those values are never null
        try {
            let user = await User.findOne({ ID: id })
            user.FirstName = firstName
            user.LastName = lastName
            const updatedUser = await user.save()
            res.json({
                userId: updatedUser.ID.toLocaleLowerCase(),
                firstName: updatedUser.FirstName,
                lastName: updatedUser.LastName
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(`Server error`)
        }

    }
}