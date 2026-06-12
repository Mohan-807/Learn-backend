const validate = (
  schema,
  source = "body"
) => {
  return (req, res, next) => {
    const result =
      schema.safeParse(
        req[source]
      );

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message:
          result.error.issues[0]
            .message,
      });
    }

    req.validatedData =
      result.data;

    next();
  };
};

export default validate;