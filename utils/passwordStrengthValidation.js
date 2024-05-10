import PasswordValidator from 'password-validator';

const passwordSchema = new PasswordValidator();

passwordSchema
    .is()
    .min(8)
    .is()
    .max(128)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits(1)
    .has()
    .not()
    .spaces()

export default passwordSchema;