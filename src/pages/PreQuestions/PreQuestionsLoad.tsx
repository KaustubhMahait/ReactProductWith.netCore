// import { useState,useEffect } from "react";
// import { getPreOptions } from "../../services/authService";
// import type { PreOptions } from "../../interfaces/PreOptions";
// import PreQuestionsSubMenu from "./PreQuestionsSubMenu";

// type PreQuestionsLoadProps={

//     QuestionID : number;
//     QuestionName: string;

// }



// export default function PreQuestionsLoad( {QuestionID,QuestionName}:PreQuestionsLoadProps) {

//     const[Loading,SetLoading]= useState(true);

//     const[PreQuestionData,SetPreQuestionData] = useState<PreOptions[]>([]);

//     const[SelectedOption,SetSelectedOption] = useState< PreOptions | null >(null);

//     const fetchData = async ()=>{
        
//                     try
//                     {
//                             SetLoading(true);
    
//                             // await new Promise(resolve => setTimeout(resolve, 1000));  
                            
//                             const data = await getPreOptions(QuestionID);

//                             SetPreQuestionData(data);

//                             console.log(data);

//                     }
//                     catch(e)
//                     {
//                         console.error("Error fetching pre-questions:", e);
//                     }
//                     finally
//                     {
//                             SetLoading(false);
//                     }
        
//                 };

//     useEffect(()=>{
    
//             SetSelectedOption(null);  // USED TO RERENDER THE CHILD COMPONENT PreQuestionsSubMenu
//             fetchData();
              
//         },[QuestionID]);

//     return (
//         <div>
//             {/* <h3>{QuestionID} is Seletced. Load Question Name Here</h3> */}

//             <h4>{QuestionID}.{QuestionName}</h4>            

//             {!Loading && (
//                 <div>

//                     { PreQuestionData.map((item) => (

//                         <div key={item.optionID}>

//                             <input
//                                 type="radio"
//                                 id={item.optionID.toString()}
//                                 name={`question_${item.questionID}`}
//                                 value={item.optionID}
//                                 onChange={()=> SetSelectedOption(item)}
//                             />

//                             <label htmlFor={item.optionID.toString()}>
//                                 {item.optionNo}. {item.optionName}
//                             </label>

//                             {/* <pre>
//                                     {JSON.stringify({
//                                         isSubOption : item.isSubOption,
//                                         subMenuFlag : item.subMenuFlag,
//                                         optionID: item.optionID
//                                     }, null, 2)}
//                             </pre> */}

//                         </div>

//                     ))}

                    

//                 </div>
//             )}

//             { SelectedOption &&  
//             ( <PreQuestionsSubMenu
//                isSubOption = {SelectedOption.isSubOption}
//                subMenuFlag = {SelectedOption.subMenuFlag}
//                optionID = {SelectedOption.optionID}
//                QuestionID = {SelectedOption.questionID}
//                />
        
//             )}

//         </div>
//     );

// }

import { useState, useEffect } from "react";
import { getPreOptions } from "../../services/authService";
import type { PreOptions } from "../../interfaces/PreOptions";
import PreQuestionsSubMenu from "./PreQuestionsSubMenu";


type PreQuestionsLoadProps = {

    QuestionID: number;

    QuestionName: string;

};


export default function PreQuestionsLoad({
    QuestionID,
    QuestionName
}: PreQuestionsLoadProps) {


    const [Loading, SetLoading] =
        useState(true);


    const [PreQuestionData, SetPreQuestionData] =
        useState<PreOptions[]>([]);


    const [SelectedOption, SetSelectedOption] =
        useState<PreOptions | null>(null);


    const fetchData = async () => {

        try {

            SetLoading(true);

            const data =
                await getPreOptions(QuestionID);

            SetPreQuestionData(data);

        }
        catch (e) {

            console.error(
                "Error fetching pre-question options:",
                e
            );

        }
        finally {

            SetLoading(false);

        }

    };


    useEffect(() => {

        // Reset selected option
        // whenever question changes
        SetSelectedOption(null);

        fetchData();

    }, [QuestionID]);


    return (

        <div className="question-content">


            {/* Question Heading */}

            <div className="question-heading">

                <span className="question-id">
                    {QuestionID}.
                </span>

                <span className="question-name">
                    {QuestionName}
                </span>

            </div>


            {/* Loading */}

            {Loading && (

                <div className="option-loading">

                    <div className="small-spinner"></div>

                    <span>
                        Loading options...
                    </span>

                </div>

            )}


            {/* Options */}

            {!Loading && (

                <div className="options-container">

                    {PreQuestionData.map((item) => (

                        <label
                            key={item.optionID}
                            className={`option-card ${
                                SelectedOption?.optionID ===
                                item.optionID
                                    ? "selected"
                                    : ""
                            }`}
                        >

                            <input
                                type="radio"
                                name={`question_${item.questionID}`}
                                value={item.optionID}
                                checked={
                                    SelectedOption?.optionID ===
                                    item.optionID
                                }
                                onChange={() =>
                                    SetSelectedOption(item)
                                }
                            />


                            <span className="option-number">
                                {item.optionNo}
                            </span>


                            <span className="option-text">
                                {item.optionName}
                            </span>

                        </label>

                    ))}

                </div>

            )}


            {/* Dynamic Sub Menu */}

            {SelectedOption && (

                <div className="sub-menu-wrapper">

                    <div className="sub-menu-header">

                        <div className="sub-menu-icon">
                            +
                        </div>

                        <div>

                            <div className="sub-menu-title">
                                Additional Information
                            </div>

                            <div className="sub-menu-description">
                                Please provide the required information
                            </div>

                        </div>

                    </div>


                    <PreQuestionsSubMenu

                        isSubOption={
                            SelectedOption.isSubOption
                        }

                        subMenuFlag={
                            SelectedOption.subMenuFlag
                        }

                        optionID={
                            SelectedOption.optionID
                        }

                        optionNo={
                            Number(SelectedOption.optionNo)
                        }

                        QuestionID={
                            QuestionID
                        }

                    />

                </div>

            )}

        </div>

    );

}

