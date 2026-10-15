export interface GetPreQuestionMasterRequest{
    Userid:string;
}

export interface GetPreQuestionMasterResponse{
    responseCode: number;
    responseMessage: string;
    totalCount: number;
    totalRecords: number;
    items: PreQuestionMaster[];
}

export interface PreQuestionMaster{

    srNo: number;
    questionID: number;
    answerID: number;
    isPreFromFinalSubmitFlag:number;
    toolTipName: string;

}