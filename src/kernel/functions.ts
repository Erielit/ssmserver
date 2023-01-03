import bcrypt from "bcryptjs";

export const validateError = (error: Error) => {
  if (error.message === "hostname invalid") {
    return "Hostname login invalid";
  } else if (error.message === "Wrong type") {
    return "Review request fields";
  } else if (error.message === "Missing fields") {
    return "Validate fields";
  } else if (error.message === "Entity already exists") {
    return "Entry found";
  } else if (error.message === "Entity not registered") {
    return "Something went wrong";
  } else if (error.message === "Entity not updated") {
    return "Something went wrong";
  } else if (error.message === "Entity not deleted") {
    return "Something went wrong";
  } else if (error.message === "Role not registered") {
    return "Inexistent role";
  } else if (error.message === "Nothing found") {
    return "No data found";
  } else if (error.message === "Inexistent sort option") {
    return "Invalid sort";
  } else if (error.message === "Vinculated entity") {
    return "Linked entity";
  } else if (error.message === "Password mismatch") {
    return "Credentials mismatch";
  } else if (error.message === "Password not saved") {
    return "Password cannot be saved";
  } else if (error.message === "Data mismatch") {
    return "Distinct data expected";
  } else if (error.message === "User disabled") {
    return "User disabled";
  } else if (error.message === "Invalid type or option") {
    return "Type or option not recognized";
  } else {
    return "Review request";
  }
};

export const hashPassword = async (password: string) => {
  return await new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash: string) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
};

export const comparePassword = async (
  password: string,
  passwordOrigin: string
) => {
  return await new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordOrigin, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

export const encode = (variableToEncode: string) => {
  return Buffer.from(variableToEncode).toString("base64");
};
export const decode = (variableToDecode: string) => {
  return Buffer.from(variableToDecode, "base64").toString("ascii");
};
