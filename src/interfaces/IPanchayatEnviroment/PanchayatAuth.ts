export interface CMLoginRequest {
    username:string;
    userpassword:string;
}

export interface CMLoginResponse {
    responseCode: number;
    responseMessage: string;
    totalCount: number;
    totalRecords: number;
    items: PanchayatLoginUser[];
}

export interface PanchayatLoginUser {
            "userID": string ,
            "roleId": string ,
            "userName": string,
            "district": string | null,
            "taluka": string | null,
            "village": string | null,
            "gramPanchayanName": string | null,
            "peopleGrade": string | null,
            "mobileNumber": string ,
            "emailId": string ,
            "villagePeopleCount": string | null,
            "femaleCount": string | null,
            "maleCount": string | null,
            "familyCount": string | null,
            "voterCount": string | null,
            "farmerCount": string | null,
            "createdBy": string | null,
            "createdDate": string | null,
            "modifiedBy": string | null,
            "modifiedDate": string | null,
            "isActive": string | null,
            "isVerified": string | null,
            "lastPasswordChangeDate": string | null,
            "isProfileComplete": string | null,
            "isPreQuestionComplete": string | null,
            "isPostQuestionComplete": string | null,
            "bearerToken": string;
}