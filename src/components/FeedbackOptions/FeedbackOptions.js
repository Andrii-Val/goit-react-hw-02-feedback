export const FeedbackOptions = ({neutralClick, goodClick, badClick}) =>{
    return(
    <>
    <h2>Please leave feedback</h2>
              
            <button onClick={goodClick}>Good</button >
            <button  onClick={neutralClick}>Neutral</button >
            <button  onClick={badClick}>Bad</button >
            </>
    )
    }