import { useState,useEffect } from "react";
import { getPreOptions } from "../../services/authService";
import type { PreOptions } from "../../interfaces/PreOptions";

type PreQuestionsLoadProps={

    QuestionID : number;
    QuestionName: string;

}



export default function PreQuestionsLoad( {QuestionID,QuestionName}:PreQuestionsLoadProps) {

    const[Loading,SetLoading]= useState(true);

    const[PreQuestionData,SetPreQuestionData] = useState<PreOptions[]>([]);

    const fetchData = async ()=>{
        
                    try
                    {
                            SetLoading(true);
    
                            // await new Promise(resolve => setTimeout(resolve, 1000));  
                            
                            const data = await getPreOptions(QuestionID);

                            SetPreQuestionData(data);

                    }
                    catch(e)
                    {
                        console.error("Error fetching pre-questions:", e);
                    }
                    finally
                    {
                            SetLoading(false);
                    }
        
                };

    useEffect(()=>{
    
            fetchData();
              
        },[QuestionID]);

    return (
        <div>
            {/* <h3>{QuestionID} is Seletced. Load Question Name Here</h3> */}

            <h4>{QuestionName}</h4>            

            {!Loading && (
                <div>

                    { PreQuestionData.map((item) => (

                        <div key={item.optionID}>

                            <input
                                type="radio"
                                id={item.optionID.toString()}
                                name={`question_${item.questionID}`}
                                value={item.optionID}
                            />

                            <label htmlFor={item.optionID.toString()}>
                                {item.optionNo}. {item.optionName}
                            </label>

                        </div>

                    ))}

                </div>
            )}

        

        </div>
    );

}