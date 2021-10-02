const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const fs = require('fs')
const users = mongoose.model('users');


exports.addUser = (req, res, next) => {
    const { name, email, phoneNo, password, confirmPassword } = req.body

    console.log('received req body: ', req.body);

    const addUser = new users({
        name,
        email,
        phoneNo,
        password,
        confirmPassword
    });
    addUser
        .save()
        .then(result => {
            console.log('result: ', result)
            res.status(200).json({ message: 'User Added Successfully!!' });
        }).catch(error => {
            console.log(error);
            res.json({ error: 'User Could not be added!!' });
        })
}

exports.updateProfile = (req, res, next) => {
    console.log(req.body);
    console.log('email: ', req.body.email);
    console.log('contactNo: ', req.body.contactNo);
    console.log('password: ', req.body.password);
    console.log('req file: ', req.file);
    if (!req.file) {
        try {
            users.findOne({ _id: req.body.id })
                .then(user => {
                    req.body.email ? user.email = req.body.email : null;
                    req.body.contactNo ? user.contactNo = req.body.contactNo : null;
                    req.body.password ? user.password = req.body.password : null;
                    user
                        .save()
                        .then(async (data) => {
                            res.status(200).json({ message: 'Profile Updated Successfully!!', data });
                        }).catch(error => {
                            console.log(error);
                            res.status(200).json({ error: 'Profile Could Not Be Updated!!' });
                        })
                }).catch(error => {
                    console.log(error);
                    res.send(error);
                })
        } catch (error) {
            console.log(error);
        }
    }
    else {
        console.log('email: ', req.body.email);
        console.log('contactNo: ', req.body.contactNo);
        console.log('password: ', req.body.password);
        console.log('req file: ', req.file);
        req.body.dp = 'images/adminsDp/' + req.file.originalname;
        try {
            users.findOne({ _id: req.body.id })
                .then(user => {
                    req.body.email ? user.email = req.body.email : null;
                    req.body.contactNo ? user.contactNo = req.body.contactNo : null;
                    req.body.password ? user.password = req.body.password : null;
                    user.dp = req.body.dp;
                    user
                        .save()
                        .then(async result => {
                            console.log('results: ', result)
                            res.status(200).json({ message: 'Profile Updated Successfully!!', result });
                        }).catch(error => {
                            console.log(error);
                            res.status(200).json({ error: 'Profile Could Not Be Updated!!' });
                        })
                }).catch(error => {
                    console.log(error);
                    res.send(error);
                })
        } catch (error) {
            console.log(error);
        }
    }
};

exports.findOneUserRecord = (req, res, next) => {
    users.findOne({ _id: req.query.userID })
        .then(async user => {
            if (!user) res.send({ error: "User Does Not Exist!!" })
            else if (user) {
                user.password = undefined
                res.json({ data: user });
            }
        }).catch(error => {
            console.log('login catch error:', error)
            return res.send({ error: "Error" })
        })
};


exports.getSpecificCompanyAllEmployees = (req, res) => {
    const { skip, limit, companyID } = req.query
    console.log('get Specific Company All Employees')
    users.find({ companyID }, { password: 0 }).sort({ _id: -1 }).skip(parseInt(skip)).limit(parseInt(limit))
        .then(result => {
            console.log(result.length)
            result ? res.send({ result }) : res.send({ error: 'No Result Found!!' })

        }).catch(error => {
            console.log(error);
            res.json({ error: 'employees could not be got!!' });
        })
}

exports.deleteOneUser = (req, res) => {
    const { id } = req.query;
    users.deleteOne({ _id: id })
        .then(result => {
            console.log('result: ', result)
            if (result.deletedCount == 1) {
                res.json({ message: 'user deleted successfully!!' });
            } else if (result.deletedCount == 0) {
                res.json({ error: 'user not found!!' });
            }
        }).catch(error => {
            console.log('delete one user catch error: ', error)
            res.json({ message: 'user could not be deleted!!' });
        })
}

exports.updateOneUser = (req, res) => {
    const { id, name, email, contactNo } = req.body;
    users.findOne({ _id: id })
        .then(result => {
            if (result) {
                result.name = name
                result.email = email
                result.contactNo = contactNo
                result
                    .save()
                    .then(updatedResult => {
                        console.log(updatedResult)
                        updatedResult.password = undefined
                        res.send({ message: 'user updated sucessfully', result: updatedResult })
                    }).catch(error => {
                        console.log('save result catch error: ', error)
                        res.send({ error: 'user updated sucessfully' })
                    })
            }
        }).catch(error => {
            console.log('fine one user for update catch error: ', error)
            res.json({ message: 'user details could not be updated!!' });
        })
}

exports.getEmployeesOfSpecificCompany = (req, res) => {
    const { companyID } = req.query
    users.find({ _id: companyID })
        .then(result => {
            if (result) {
                console.log('AllEmployeesOfSpecificCompany: ', result)
            }
        }).catch(error => {
            console.log('AllEmployeesOfSpecificCompany catch error: ', error)
        })
}

exports.getSpecificCompanyInfo = (req, res) => {
    const { companyID } = req.query
    console.log(companyID)
    users.findOne({ _id: companyID }, { name: 1, dp: 1, userType: 1, followers: 1, projects: 1 })
        .then(result => {
            if (result) {
                console.log('getSpecificCompanyInfo: ', result)
                res.send({ result })
            }
        }).catch(error => {
            console.log('getSpecificCompanyInfo catch error: ', error)
        })
}
