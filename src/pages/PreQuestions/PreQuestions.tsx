// import { useState,useEffect } from "react";
// import type {PreQuestions} from "../../interfaces/PreQuestions";
// import { getPreQuestions } from "../../services/authService";
// import "./PreQuestions.css";
// import PreQuestionsLoad from "./PreQuestionsLoad";
// // import {PreQuestionLoad} from "./PreQuestionsLoad";


// export default function PreQuestions(){

//     const[Loading,SetLoading]= useState(true);

//     const[PreQuestion,SetPreQuestion] = useState<PreQuestions[]>([]);

//     const[selectedQuestionID,SetselectedQuestionID] = useState<number|null>(null);
//     const[selectedQuestionName,SetselectedQuestionName] = useState<string|null>(null);

//       const fetchData = async ()=>{
    
//                 try
//                 {
//                         SetLoading(true);

//                         await new Promise(resolve => setTimeout(resolve, 1000));

//                         const data = await getPreQuestions();

//                         // console.log(data);

//                         SetPreQuestion(data);

//                 }
//                 catch(e)
//                 {
//                     console.error("Error fetching pre-questions:", e);
//                 }
//                 finally
//                 {
//                         SetLoading(false);
//                 }
    
//             };
    
    
//         useEffect(()=>{
    
//             fetchData();
              
//         },[]);

//     if(Loading == true){
//         return (
//              <h3>Loading Data...</h3>
//         );
//     }
//     else{
//                     return(
//     <div>
//             <h3>Load Pre-Questions here</h3>

//         <div className="card shadow-sm border-0" >
//             <div className="card-body">
//                 <div id="qaContainer">

//                   <div className="circle-container" id="circleContainer">

//                     {
//                        PreQuestion.map((item, index)=>(

//                             <div className="circle"  key={item.questionID} id={item.questionID.toString()} 
//                             onClick ={() => {
//                                              SetselectedQuestionID(item.questionID),
//                                              SetselectedQuestionName(item.questionName)
//                                             }
//                             } 
//                             >
//                                     {index + 1}
//                             </div>
                            
//                        ))
//                     }                            
                                 
//                    </div>
                   
//                         {/* {
//                             selectedQuestionID && ( <PreQuestionsLoad QuestionID={selectedQuestionID} QuestionName={selectedQuestionName}/> )
//                         } */}

//                         {selectedQuestionID !== null && selectedQuestionName !== null && (
//                                 <PreQuestionsLoad
//                                          key={selectedQuestionID}                // Because the key changed, React treats it as a new component.
//                                         QuestionID={selectedQuestionID}
//                                         QuestionName={selectedQuestionName}
//                                 />
//                         )}

//                 </div>
//             </div>
//         </div>
//     </div>

                           
//                           );
//     }
// }

import { useState, useEffect } from "react";
import type { PreQuestions } from "../../interfaces/PreQuestions";
import { getPreQuestions } from "../../services/authService";
import "./PreQuestions.css";
import PreQuestionsLoad from "./PreQuestionsLoad";


export default function PreQuestions() {

    const [Loading, SetLoading] = useState(true);

    const [PreQuestion, SetPreQuestion] =
        useState<PreQuestions[]>([]);

    const [selectedQuestionID, SetselectedQuestionID] =
        useState<number | null>(null);

    const [selectedQuestionName, SetselectedQuestionName] =
        useState<string | null>(null);


    const fetchData = async () => {

        try {

            SetLoading(true);

            const data = await getPreQuestions();

            SetPreQuestion(data);

        }
        catch (e) {

            console.error(
                "Error fetching pre-questions:",
                e
            );

        }
        finally {

            SetLoading(false);

        }

    };


    useEffect(() => {

        fetchData();

    }, []);


    if (Loading) {

        return (
            <div className="pre-loading">

                <div className="pre-spinner"></div>

                <span>
                    Loading Pre-Questions...
                </span>

            </div>
        );

    }


    return (

        <div className="pre-question-page">

            {/* Page Header */}

            <div className="pre-page-header">

                <h3>
                    Pre-Questions
                </h3>

                <span>
                    Please select the appropriate option
                </span>

            </div>


            {/* Main Card */}

            <div className="pre-question-card">

                {/* Question Navigation */}

                <div className="question-navigation">

                    {PreQuestion.map((item, index) => (

                        <button
                            type="button"
                            key={item.questionID}
                            className={`question-circle ${
                                selectedQuestionID === item.questionID
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => {

                                SetselectedQuestionID(
                                    item.questionID
                                );

                                SetselectedQuestionName(
                                    item.questionName
                                );

                            }}
                        >
                            {index + 1}
                        </button>

                    ))}

                </div>


                {/* Selected Question */}

                {selectedQuestionID !== null &&
                    selectedQuestionName !== null && (

                        <PreQuestionsLoad
                            key={selectedQuestionID}
                            QuestionID={selectedQuestionID}
                            QuestionName={selectedQuestionName}
                        />

                    )}


                {/* No Question Selected */}

                {selectedQuestionID === null && (

                    <div className="question-empty">

                        <div className="empty-icon">
                            ?
                        </div>

                        <h4>
                            Select a Question
                        </h4>

                        <p>
                            Please select a question from the above
                            navigation.
                        </p>

                    </div>

                )}

            </div>

        </div>

    );
}
