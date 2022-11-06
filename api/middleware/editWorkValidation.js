const Joi = require('joi');

const editWorkValidation = (req, res, next) => {
    try {
        const schema = Joi.object({
            title: Joi.string().required('Title is required'),
            link: Joi.string().required('link is required'),
            task: Joi.string().required('task is required'),
            problems: Joi.array().required('problems is required'),
            result: Joi.array().required('result is required'),
        });
        console.log('888:', req.body);
        const { error } = schema.validate(req.body);
        if (error) {
            throw new Error(error);
        }
        next();
    } catch (error) {
        res.status(404).json({ message: error, response: null });
        next();
    }
};

module.exports = {
    editWorkValidation,
};
