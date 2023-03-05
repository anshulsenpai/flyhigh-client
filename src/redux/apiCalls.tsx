import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import {publicRequest} from "../RequestMethods"
import { ILoginUser, IRegisterUser } from "../interfaces/User";

export const login = async (dispatch: any, user: ILoginUser) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

// export const register = async (disoatch: any, user: IRegisterUser) => {

// }