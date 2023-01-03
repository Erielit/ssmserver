import bcrypt from 'bcryptjs';

export const validateError = (error: Error) => {
  if (error.message === 'hostname invalid') {
    return 'Hostname login invalid';
  } else if (error.message === 'Wrong type') {
    return 'Review request fields';
  } else if (error.message === 'Missing fields') {
    return 'Validate fields';
  } else if (error.message === 'Entity already exists') {
    return 'Entry found';
  } else if (error.message === 'Entity not registered') {
    return 'Something went wrong';
  } else if (error.message === 'Entity not updated') {
    return 'Something went wrong';
  } else if (error.message === 'Entity not deleted') {
    return 'Something went wrong';
  } else if (error.message === 'Instance not registered') {
    return 'Inexistent instance';
  } else if (error.message === 'Role not registered') {
    return 'Inexistent role';
  } else if (error.message === 'Limit reached in instance') {
    return 'Limit reached';
  } else if (error.message === 'Nothing found') {
    return 'No data found';
  } else if (error.message === 'Inexistent sort option') {
    return 'Invalid sort';
  } else if (error.message === 'Vinculated entity') {
    return 'Linked entity';
  } else if (error.message === 'User instance mismatch') {
    return 'User exist but on another instance';
  } else if (error.message === 'Password mismatch') {
    return 'Credentials mismatch';
  } else if (error.message === 'Password not saved') {
    return 'Password cannot be saved';
  } else if (error.message === 'Url atomic violation') {
    return 'Url instance may be unique';
  } else if (error.message === 'Data mismatch') {
    return 'Distinct data expected';
  } else if (error.message === 'User disabled') {
    return 'User disabled';
  } else if (error.message === 'Invalid type or option') {
    return 'Type or option not recognized';
  } else if (error.message === 'Creation rules disrespected') {
    return 'Check creation rules';
  } else if (error.message === 'Generation intents limit reached') {
    return 'Limit reached in generation';
  } else if (error.message === 'Duplicated order values') {
    return 'Order values are repeating';
  } else if (error.message === 'Course already published') {
    return 'The event type course is already published';
  } else if (error.message === 'recaptchaToken is required') {
    return 'reCaptcha token is required';
  } else if (error.message === 'recaptchaToken invalid') {
    return 'The token reCaptcha invalid';
  } else if (error.message === 'Unanswered survey'){
    return error.message;
  } else if (error.message === 'Access code mismatch') {
    return error.message;
  }  else {
    return 'Review request';
  }
};

export const hashPassword = async (password: string) => {
  let hashedPassword: string = await new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash: string) => {
      if (err) {
        console.log(err);
        reject();
      }
      resolve(hash);
    });
  });
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  passwordOrigin: string
) => {
  let isEqualPassword: boolean = await new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordOrigin, (err, result) => {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(result);
      }
    });
  });
  return isEqualPassword;
};

export const encode = (variableToEncode: string) => {
  return Buffer.from(variableToEncode).toString('base64');
};
export const decode = (variableToDecode: string) => {
  return Buffer.from(variableToDecode, 'base64').toString('ascii');
};
