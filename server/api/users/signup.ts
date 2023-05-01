import { users } from '../../dbModels';

interface IRequestBody {
    name: string;
    email: string;
    password: string;
    confirm_password: string,
}

export default defineEventHandler(async (event) => {
   
    const { name, email, password } = await readBody<IRequestBody>(event);

    try {
        const userData = await users.findOne({email,});
        if ( userData ) {
            event.res.statusCode = 400;
            return { code: "USER_EXITS", message: "User with given email already exists"};
        } else {
            const newUserData = await users.create({email,name,password});
            return {id: newUserData._id, name: newUserData.name};
        }

    } catch (err) {
        console.log(err)
        event.res.statusCode = 500;
        return {code: "ERROR",message: "Something went wrong"}
    }
})