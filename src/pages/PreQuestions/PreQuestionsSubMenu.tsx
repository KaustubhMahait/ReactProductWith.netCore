// type PreQuestionsSubMenuProps ={

//     isSubOption : number;
//     subMenuFlag: number;
//     optionID:number;
//     QuestionID:number
// }

// type OnPageData = {
//     Id: number;
//     QueId: number | null;
//     FormId: number | null;
//     DocName: string;
//     PreQueId: number;
//     DocNameToolTp: string;
//     PreQueIdOptionNo: number | null;
//     ElementMstId: number | null;
// };

// const OnPageDataList: OnPageData[] = [
//     {
//         Id: 4,
//         QueId: 3,
//         FormId: 1,
//         DocName: "ग्रामपंचायतच्या कार्यालयात तक्रार पेटी लावली असल्यास तिचे छायाचित्र अपलोड करा",
//         PreQueId: 3,
//         DocNameToolTp:
//             "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",
//         PreQueIdOptionNo: null,
//         ElementMstId: null
//     },
//     {
//         Id: 17,
//         QueId: 5,
//         FormId: 1,
//         DocName: "CCTV नियंत्रण कक्ष/लाइव्ह फीडमधील स्क्रीन फोटो अपलोड करा",
//         PreQueId: 5,
//         DocNameToolTp:
//             "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",
//         PreQueIdOptionNo: null,
//         ElementMstId: null
//     },
//     {
//         Id: 60,
//         QueId: 0,
//         FormId: 0,
//         DocName: "आपले सरकार सेवा केंद्रचा फोटो अपलोड करा",
//         PreQueId: 2,
//         DocNameToolTp:
//             "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",
//         PreQueIdOptionNo: null,
//         ElementMstId: null
//     },
//     {
//         Id: 67,
//         QueId: null,
//         FormId: null,
//         DocName:
//             "ग्रामपंचायतच्या कार्यालयात तक्रार पेटी व ऑनलाईन पोर्टल असल्यास छायाचित्र अपलोड करा",
//         PreQueId: 3,
//         DocNameToolTp:
//             "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",
//         PreQueIdOptionNo: 1,
//         ElementMstId: null
//     },
//     {
//         Id: 68,
//         QueId: null,
//         FormId: null,
//         DocName:
//             "ग्रामपंचायतच्या कार्यालयात तक्रार पेटी असल्यास छायाचित्र अपलोड करा",
//         PreQueId: 3,
//         DocNameToolTp:
//             "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",
//         PreQueIdOptionNo: 2,
//         ElementMstId: null
//     },
//     {
//         Id: 69,
//         QueId: null,
//         FormId: null,
//         DocName:
//             "ग्रामपंचायतच्या कार्यालयात ऑनलाईन पोर्टल असल्यास छायाचित्र अपलोड करा",
//         PreQueId: 3,
//         DocNameToolTp:
//             "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",
//         PreQueIdOptionNo: 3,
//         ElementMstId: null
//     }
// ];

// type OnPageTextData = {
//     Id: number;
//     Name: string;
//     IsActive: number;
//     Queid: number;
//     FormId: number;
//     PreQueId: number;
//     TextValidationType: number;
// };

// const OnPageTextDataList: OnPageTextData[] = [
//     {
//         Id: 1,
//         Name: "वेबसाईट लिंक टाका",
//         IsActive: 1,
//         Queid: 0,
//         FormId: 0,
//         PreQueId: 4,
//         TextValidationType: 1
//     },
//     {
//         Id: 2,
//         Name: "किती CCTV बसविण्यात आले",
//         IsActive: 1,
//         Queid: 0,
//         FormId: 0,
//         PreQueId: 5,
//         TextValidationType: 2
//     },
//     {
//         Id: 3,
//         Name: "कमीत कमी एका ऍप डाउनलोड केलेल्या एकूण नागरिकांची संख्या",
//         IsActive: 1,
//         Queid: 0,
//         FormId: 0,
//         PreQueId: 7,
//         TextValidationType: 2
//     }
// ];

// export default function PreQuestionsSubMenu( {isSubOption,subMenuFlag,optionID,QuestionID}: PreQuestionsSubMenuProps ){


//     const renderSubMenu = () => {

//         switch(subMenuFlag){

//                 case 1:
//                 return(<h4>1</h4>);

//                 case 2:
                
//                         {

//                 // Find documents for the selected Question
//                 const documents = OnPageDataList.filter(
//                     item =>
//                         item.PreQueId === QuestionID &&
//                         (
//                             // Common document
//                             item.PreQueIdOptionNo === null ||

//                             // Option-specific document
//                             item.PreQueIdOptionNo === optionID
//                         )
//                 );

//                 if (documents.length === 0) {
//                     return (
//                         <div>
//                             <p>No document found.</p>
//                         </div>
//                     );
//                 }

//                 return (
//                     <div>
//                         {documents.map(item => (
//                             <div
//                                 key={item.Id}
//                                 className="mb-3"
//                             >

//                                 <label className="form-label">
//                                     {item.DocName}
//                                 </label>
//                                 <br/>
//                                 <input
//                                     type="file"
//                                     className="form-control"
//                                     accept=".jpg,.jpeg,.png,.pdf"
//                                 />
//                                 <br/>
//                                 <small className="text-muted">
//                                     {item.DocNameToolTp}
//                                 </small>

//                             </div>
//                         ))}
//                     </div>
//                 );
//             }


//                 case 3:
                
//                 {

//     const textData = OnPageTextDataList.filter(
//         item =>
//             item.PreQueId === QuestionID &&
//             item.IsActive === 1
//     );

//     if (textData.length === 0) {
//         return (
//             <div>
//                 <p>No textbox configuration found.</p>
//             </div>
//         );
//     }

//     return (
//         <div>

//             {textData.map(item => (

//                 <div
//                     key={item.Id}
//                     className="mb-3"
//                 >

//                     <label className="form-label">
//                         {item.Name}
//                     </label>
//                     <br/>
//                     <input
//                         type="text"
//                         className="form-control"
//                     />

//                 </div>

//             ))}

//         </div>
//     );
// }

//                 case 4:
//                 {

//     // -----------------------------
//     // Document configuration
//     // -----------------------------
//     const questionDocuments = OnPageDataList.filter(
//         item => item.PreQueId === QuestionID
//     );

//     const optionDocuments = questionDocuments.filter(
//         item => item.PreQueIdOptionNo === optionID
//     );

//     const documents =
//         optionDocuments.length > 0
//             ? optionDocuments
//             : questionDocuments.filter(
//                 item => item.PreQueIdOptionNo === null
//             );


//     // -----------------------------
//     // TextBox configuration
//     // -----------------------------
//     const textData = OnPageTextDataList.filter(
//         item =>
//             item.PreQueId === QuestionID &&
//             item.IsActive === 1
//     );


//     return (
//         <div>

//             {/* Document Upload */}
//             {documents.map(item => (

//                 <div
//                     key={`doc_${item.Id}`}
//                     className="mb-3"
//                 >

//                     <label className="form-label">
//                         {item.DocName}
//                     </label>                    
//                     <input
//                         type="file"
//                         className="form-control"
//                         accept=".jpg,.jpeg,.png,.pdf"
//                     />
//                     <br/>
//                     <small className="text-muted">
//                         {item.DocNameToolTp}
//                     </small>

//                 </div>

//             ))}


//             {/* TextBox */}
//             {textData.map(item => (

//                 <div
//                     key={`text_${item.Id}`}
//                     className="mb-3"
//                 >

//                     <label className="form-label">
//                         {item.Name}
//                     </label>

//                     <input
//                         type={item.TextValidationType === 2 ? "number" : "text"}
//                         className="form-control"
//                     />

//                 </div>

//             ))}

//         </div>
//     );
// }

//                 case 5:
//                 return(
//                      <h4>5</h4>
//                       );

//                 case 6:
//                 return(
//                      <h4>6</h4>
//                       );

//                 case 7:
//                 return(
//                      <h4>7</h4>
//                       );
                
//                 case 8:
//                 return(
//                        <h4>8</h4>
//                       );

//         }

//     };    

//         if( isSubOption < 0 ){

//             return null;

//         }

//              return (         
                 
         
//                  <div>
         
//                          {/* <h3> Load Sub Menu Here!</h3> */}
         
//                          <h3>SubOption: {isSubOption} and Type: {subMenuFlag} and Option : {optionID} and QuestionID : {QuestionID}</h3>
         
//                             {renderSubMenu()}

//                          {/* {
//                              isSubOption > 0 
//                              && 
//                              renderSubMenu()
//                          } */}
         
//                  </div>
         
//              );

// }

type PreQuestionsSubMenuProps = {

    isSubOption: number;

    subMenuFlag: number;

    optionID: number;

    optionNo: number;

    QuestionID: number;

};


type OnPageData = {

    Id: number;

    QueId: number | null;

    FormId: number | null;

    DocName: string;

    PreQueId: number;

    DocNameToolTp: string;

    PreQueIdOptionNo: number | null;

    ElementMstId: number | null;

};


const OnPageDataList: OnPageData[] = [

    {
        Id: 4,

        QueId: 3,

        FormId: 1,

        DocName:
            "ग्रामपंचायतच्या कार्यालयात तक्रार पेटी लावली असल्यास तिचे छायाचित्र अपलोड करा",

        PreQueId: 3,

        DocNameToolTp:
            "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",

        PreQueIdOptionNo: null,

        ElementMstId: null
    },


    {
        Id: 17,

        QueId: 5,

        FormId: 1,

        DocName:
            "CCTV नियंत्रण कक्ष/लाइव्ह फीडमधील स्क्रीन फोटो अपलोड करा",

        PreQueId: 5,

        DocNameToolTp:
            "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",

        PreQueIdOptionNo: null,

        ElementMstId: null
    },


    {
        Id: 60,

        QueId: 0,

        FormId: 0,

        DocName:
            "आपले सरकार सेवा केंद्रचा फोटो अपलोड करा",

        PreQueId: 2,

        DocNameToolTp:
            "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",

        PreQueIdOptionNo: null,

        ElementMstId: null
    },


    {
        Id: 67,

        QueId: null,

        FormId: null,

        DocName:
            "ग्रामपंचायतच्या कार्यालयात तक्रार पेटी व ऑनलाईन पोर्टल असल्यास छायाचित्र अपलोड करा",

        PreQueId: 3,

        DocNameToolTp:
            "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",

        PreQueIdOptionNo: 1,

        ElementMstId: null
    },


    {
        Id: 68,

        QueId: null,

        FormId: null,

        DocName:
            "ग्रामपंचायतच्या कार्यालयात तक्रार पेटी असल्यास छायाचित्र अपलोड करा",

        PreQueId: 3,

        DocNameToolTp:
            "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",

        PreQueIdOptionNo: 2,

        ElementMstId: null
    },


    {
        Id: 69,

        QueId: null,

        FormId: null,

        DocName:
            "ग्रामपंचायतच्या कार्यालयात ऑनलाईन पोर्टल असल्यास छायाचित्र अपलोड करा",

        PreQueId: 3,

        DocNameToolTp:
            "टीप : एकापेक्षा अधिक छायाचित्रे अपलोड करावयाची असल्यास, ती छायाचित्रे एकत्र एका (PDF) फ़ाइल मध्ये करून अपलोड करावीत.(अपलोड फाईल Size:15 MB)",

        PreQueIdOptionNo: 3,

        ElementMstId: null
    }

];


type OnPageTextData = {

    Id: number;

    Name: string;

    IsActive: number;

    Queid: number;

    FormId: number;

    PreQueId: number;

    TextValidationType: number;

};


const OnPageTextDataList: OnPageTextData[] = [

    {
        Id: 1,

        Name: "वेबसाईट लिंक टाका",

        IsActive: 1,

        Queid: 0,

        FormId: 0,

        PreQueId: 4,

        TextValidationType: 1
    },


    {
        Id: 2,

        Name: "किती CCTV बसविण्यात आले",

        IsActive: 1,

        Queid: 0,

        FormId: 0,

        PreQueId: 5,

        TextValidationType: 2
    },


    {
        Id: 3,

        Name:
            "कमीत कमी एका ऍप डाउनलोड केलेल्या एकूण नागरिकांची संख्या",

        IsActive: 1,

        Queid: 0,

        FormId: 0,

        PreQueId: 7,

        TextValidationType: 2
    }

];


export default function PreQuestionsSubMenu({

    isSubOption,

    subMenuFlag,

    optionID,

    optionNo,

    QuestionID

}: PreQuestionsSubMenuProps) {


    /*
     * ======================================================
     * DOCUMENT UPLOAD
     * ======================================================
     */

    const renderDocumentUpload = () => {


        const questionDocuments =
            OnPageDataList.filter(
                item =>
                    item.PreQueId === QuestionID
            );


        const optionDocuments =
            questionDocuments.filter(
                item =>
                    item.PreQueIdOptionNo === optionNo
            );


        /*
         * If option-specific document exists,
         * show that document.
         *
         * Otherwise show common document.
         */

        const documents =
            optionDocuments.length > 0
                ? optionDocuments
                : questionDocuments.filter(
                    item =>
                        item.PreQueIdOptionNo === null
                );


        if (documents.length === 0) {

            return (
                <div className="no-data">
                    No document configuration found.
                </div>
            );

        }


        return (

            <div className="dynamic-controls">

                {documents.map(item => (

                    <div
                        key={item.Id}
                        className="control-group"
                    >

                        <label className="control-label">
                            {item.DocName}
                        </label>


                        <input
                            type="file"
                            className="modern-file-input"
                            accept=".jpg,.jpeg,.png,.pdf"
                        />


                        <small className="control-help">
                            {item.DocNameToolTp}
                        </small>

                    </div>

                ))}

            </div>

        );

    };


    /*
     * ======================================================
     * TEXTBOX
     * ======================================================
     */

    const renderTextBox = () => {


        const textData =
            OnPageTextDataList.filter(
                item =>
                    item.PreQueId === QuestionID &&
                    item.IsActive === 1
            );


        if (textData.length === 0) {

            return (
                <div className="no-data">
                    No textbox configuration found.
                </div>
            );

        }


        return (

            <div className="dynamic-controls">

                {textData.map(item => (

                    <div
                        key={item.Id}
                        className="control-group"
                    >

                        <label className="control-label">
                            {item.Name}
                        </label>


                        <input
                            type={
                                item.TextValidationType === 2
                                    ? "number"
                                    : "text"
                            }
                            className="modern-input"
                        />

                    </div>

                ))}

            </div>

        );

    };


    /*
     * ======================================================
     * SUB MENU SWITCH
     * ======================================================
     */

    const renderSubMenu = () => {

        switch (subMenuFlag) {


            /*
             * TYPE 1
             */

            case 1:

                return (
                    <div className="placeholder-control">
                        Sub Menu Type 1
                    </div>
                );


            /*
             * TYPE 2
             * Document Upload
             */

            case 2:

                return renderDocumentUpload();


            /*
             * TYPE 3
             * TextBox
             */

            case 3:

                return renderTextBox();


            /*
             * TYPE 4
             * Document + TextBox
             */

            case 4:

                return (
                    <div>

                        {renderDocumentUpload()}

                        <div className="control-separator"></div>

                        {renderTextBox()}

                    </div>
                );


            /*
             * TYPE 5
             */

            case 5:

                return (
                    <div className="placeholder-control">
                        Sub Menu Type 5
                    </div>
                );


            /*
             * TYPE 6
             */

            case 6:

                return (
                    <div className="placeholder-control">
                        Sub Menu Type 6
                    </div>
                );


            /*
             * TYPE 7
             */

            case 7:

                return (
                    <div className="placeholder-control">
                        Sub Menu Type 7
                    </div>
                );


            /*
             * TYPE 8
             */

            case 8:

                return (
                    <div className="placeholder-control">
                        Sub Menu Type 8
                    </div>
                );


            default:

                return null;

        }

    };


    /*
     * ======================================================
     * CHECK SUB OPTION
     * ======================================================
     */

    if (isSubOption <= 0) {

        return null;

    }


    return (

        <div className="sub-menu-content">

            {renderSubMenu()}

        </div>

    );

}

