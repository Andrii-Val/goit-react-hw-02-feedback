
import { Statistics } from "components/Statistics/Statistics";
import { Component } from "react";
 
const styles= {
    padding: 20,
}
export default class FeeBback extends Component {
    state = {
        good: 0,
  neutral: 0,
  bad: 0,
  
    };

    goodClick = ()=>{
        this.setState( prevState=> {
         return{ good: prevState.good +1,}
        }
       
        );
    };
        


    
    neutralClick= ()=>{
        this.setState((prevState) =>{
            return{
                neutral: prevState.neutral + 1,
            };
        });


    };
    badClick= ()=>{
        this.setState(prevState =>{
            return{
                bad: prevState.bad + 1,
            };
        });


    };

    countPositiveFeedbackPercentage =()=>{
        const{good}=this.state;
        return (good / this.countTotalFeedback()) * 100;
    }
    
    countTotalFeedback =()=>{
       const{good, neutral, bad } = this.state;
       return good + neutral + bad;
        };

render(){
const{good, neutral, bad } = this.state;
const {countTotalFeedback,
    countPositiveFeedbackPercentage} = this;



    return(
        <div style={styles}>
        <div>

            <h2>Please leave feedback</h2>
          
            <option onClick={this.goodClick}>Good</option >
            <option  onClick={this.neutralClick}>Neutral</option >
            <option  onClick={this.badClick}>Bad</option >
        </div>
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
    </div>
    )
};



};