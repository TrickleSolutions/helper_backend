const express = require('express');
const router = express.Router();
const passport = require('passport');
const CustomerModel = require('../../Models/CustomerModel/UserModel');

router.get('/login/success', async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Not Authorized' });
        }

        const user = req.user._json;
        const existingUser = await CustomerModel.findOne({ email: user.email });

        if (!existingUser) {
            const newUser = new CustomerModel({ name: user.name, email: user.email, avatar: user.picture });
            await newUser.save();
            res.status(200).json({
                error: false,
                message: 'User Registered and Logged In Successfully',
                user: newUser,
            });
        } else {
            res.status(200).json({
                error: false,
                message: 'User logged in successfully',
                user: existingUser,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
});

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
}));

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        error: true,
        message: 'Log in Failure',
    });
});

router.get('/google', passport.authenticate('google', ['profile', 'email']));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

module.exports = router;