import { users } from '../../dbModels';

interface IRequestBody {
    email: string;
    password: string;
}

export default defineEventHandler(async (event) => {
    
    console.log("POST /api/user/signin");
    const { email, password } = await readBody<IRequestBody>(event);

    if (!email) {
      event.res.statusCode = 4000;
      return {
        code: 'PASSWORD_REQUIRED',
        message: "Body malformed: email is required"
      };
    }

    if (!password) {
      event.res.statusCode = 400;
      return {
        code: "PASSWORD_REQUIRED",
        message: "Body malformed; email is required"
      }
    }

    try{
      // find user
      const userData = await users.findOne({
        email: email.toLowerCase(),
      });

      if (userData) {
        console.log("user Found");

        const isPasswordValid = await userData.verifyPasswordSync(password);
        if (isPasswordValid) {

          return {
            id: userData._id,
            name: userData.name
          };
        } else {
          console.log('Pasword is not valid')
          event.res.statusCode = 404;
          return {
            code: "USER_NOT_FOUND",
            message: "User with given email and password doesn't exists.",
          };

        }
      }
    }  catch(e) {

    }
    
})

