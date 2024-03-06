import React, {useEffect, useState} from 'react'
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react'
import Axios from "axios";

import '../styles/main.css'
import { YesNoGraph } from './Charts/YesNoGraph';
import { BarGraph } from './Charts/BarGraph';

Amplify.configure(aws_exports);

export const Main = () => {

    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        Axios.get('https://chatbot-app-lex.herokuapp.com/api/get').then((response) => {
            const sData = response;
            //console.log(response.data);
            setServerData(response.data);
        })
    }, []);


    const handleComplete = (err, confirmation) => {
        Axios.post('https://chatbot-app-lex.herokuapp.com/api/post',confirmation).then(()=>{
           if(err)console.log(err);


           var data = serverData;
        
            data["adaptation"][confirmation.slots.adaptation] += 1;
            data["betterForm"][confirmation.slots.betterForm] += 1;
            data["evaluationSchool"][confirmation.slots.evaluationSchool] += 1;
            data["interruptingStudies"][confirmation.slots.interruptingStudies] += 1;
            data["personalScale"][confirmation.slots.personalScale] += 1;
            data["remainForm"][confirmation.slots.remainForm] += 1;
            
            setServerData(data);
            console.log(serverData)
        })
        window.location.reload()
    }

    return (
        <main>
        <section className="post-hero">
                <div className="container">
                    <h2 >Bot description</h2>
                    <p className="bot-description">
                        This bot provides easy access to the opinion of the masses on the topic "Education during a pandemic". It makes it easy to collect information 
                        and graphically display it using graphs and their combinations. The bot guarantees complete anonymity and is not targeted at any specific institution. 
                        You don't have to be a student or teacher to express your opinion, this questionnaire is available to everyone.
                        We hope you'll enjoy the debate with PandemicBot.
                    </p>
                    <p className="bot-description red-alert">
                        Please, try to provide really simple responses that would not confuse the PandemicBot.
                        Bot is in early stage of training, so it's not able to process long answers. Thank you for understanding.
                    </p>
                </div>
            </section>
            
          <section className="bot-section">
            <div className="container">
                <ChatBot
                    title="PandemicBot"
                    botName="ZCTbot"
                    welcomeMessage="Hey, my name is PandemicBot! I would like to ask you some questions related to changes in schools that emerged during this crisis. Would you like to continue ?"
                    onComplete={handleComplete}
                    clearOnComplete={true}
                    conversationModeOn={false}
                />
            </div>
          </section>

          <section>
            <div className="container" style={{flexDirection: 'column'}}>
                <div  className="section-info">
                    <h1>You can see opinions of the masses below</h1>
                </div>
                    <h2 className="container total">Total respondents : {serverData.total} </h2>
            </div>
                
                <div className="container" style={{flexDirection: 'column'}}>

                    <BarGraph
                        data={serverData.personalScale}
                        title={'How would you rate the impact of a pandemic on your life?'}/>

                    <YesNoGraph data={serverData.evaluationSchool}
                                yes={'#06D6A0'}
                                no={'#EF476F'}
                                title={'Was your evaluation influenced by changes in the form of teaching ?'}/>

                    <BarGraph
                        data={serverData.adaptation}
                        title={'How has your school adapted to this situation?'}/>

                    <YesNoGraph
                        data={serverData.interruptingStudies}
                        yes={'#FEE440'}
                        no={'#F15BB5'}
                        title={'Have you ever considered interrupting your studies?'}/>
                    
                    <YesNoGraph 
                        data={serverData.betterForm}            
                        yes={'#FCBF49'} 
                        no={'#D62828'}  
                        title={'Is there a better solution to manage the form of teaching ?'}
                    />

                    <YesNoGraph 
                        data={serverData.remainForm}            
                        yes={'#FF9B54'} 
                        no={'#FF7F51'}  
                        title={'Would you like this form of study to continue?'}/>

                </div>
          </section>
        </main>
    )
}
