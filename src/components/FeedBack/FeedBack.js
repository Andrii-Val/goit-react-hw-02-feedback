import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Component } from "react";
import { Notification } from "components/Notification/Notification";
 
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
        } ); };
        


    neutralClick= ()=>{
        this.setState((prevState) =>{
            return{
                neutral: prevState.neutral + 1,
            };
        }); };
    badClick= ()=>{
        this.setState(prevState =>{
            return{
                bad: prevState.bad + 1,
            };
        }); };

    countPositiveFeedbackPercentage =()=>{
        const{good}=this.state;
        return this.countTotalFeedback() === 0 ? 0 : (good / this.countTotalFeedback()) * 100;
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
        <>
        <section  style={styles} title="Please leave feedback">
        
          
            <FeedbackOptions  badClick ={this.badClick} goodClick={this.goodClick} neutralClick ={this.neutralClick}  />
        </section> 
        <section  style={styles} title="Statistics">
        <h3>Statistics</h3>
            {countTotalFeedback()=== 0 ? <Notification message={("There is no feedback")}/> :
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
  }
  </section>
   </>
    )
};



};