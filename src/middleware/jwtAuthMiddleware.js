import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/signin');
    }

    try {
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRETKEY
        );

        req.userId = payload.id;
        req.email = payload.email;

        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        });
    }
};

export default jwtAuth;