
import {useState,useEffect} from "react";
import {GP_GetPreQuestionMaster} from "../../../services/CMapiServices"
import type {GetPreQuestionMasterRequest,GetPreQuestionMasterResponse} from "../../../interfaces/IPanchayatEnviroment/GetPreQuestionMaster"


export default function PreForms(){

    const [data, setData] = useState<GetPreQuestionMasterResponse | null>(null);

    const FetchData =  async ()=>{

        try{

            const request : GetPreQuestionMasterRequest = {
                Userid: localStorage.getItem("productionUserid") ?? ""
            };

            const data : GetPreQuestionMasterResponse = await GP_GetPreQuestionMaster(request);

            setData(data);

        }
        catch(error){
            console.error("Error fetching data:", error);
        }

    };

    useEffect(() => {

        FetchData();

    },[]);

    return (
    <div>

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

                        {
                        
                            

                        }

                </div>
            </div>
        </div>
    </div>
    )
};
