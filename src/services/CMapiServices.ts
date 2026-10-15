import CMapi from './CMapi';
import type {CMLoginRequest,CMLoginResponse} from "../interfaces/IPanchayatEnviroment/PanchayatAuth"


export const cmlogin = async (
    request: CMLoginRequest
): Promise<CMLoginResponse> => {
    const response = await CMapi.post<CMLoginResponse>(
        "/User/Login",
        request
    );

    return response.data;
};