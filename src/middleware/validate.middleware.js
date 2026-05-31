// src/middleware/validate.middleware.js

const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message:
          result.error.errors[0].message,
      });
    }

    req.validatedData = result.data;

    next();
  };
};

export default validate;