import CMapi from './CMapi';
import type {CMLoginRequest,CMLoginResponse} from "../interfaces/IPanchayatEnviroment/PanchayatAuth"
import type {GetPreQuestionMasterRequest,GetPreQuestionMasterResponse} from "../interfaces/IPanchayatEnviroment/GetPreQuestionMaster"


export const cmlogin = async (
    request: CMLoginRequest
): Promise<CMLoginResponse> => {
    const response = await CMapi.post<CMLoginResponse>(
        "/User/Login",
        request
    );

    return response.data;
};

export const GP_GetPreQuestionMaster = async (
    request: GetPreQuestionMasterRequest
): Promise<GetPreQuestionMasterResponse> => {
    const response = await CMapi.post<GetPreQuestionMasterResponse>(
        "/PreExamQuestion/GetPreQuestionMaster",
        request
    );

    return response.data;
};