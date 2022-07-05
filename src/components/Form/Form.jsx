import { Input, Button } from "rsuite";
import classes from "./Form.module.css"

const Form = () => {
    const[journalList, setJournalList] = useState([
    "journal 1",
    "journal 2",
    "journal 3",
]);
   
    const[journalData, setJournalData] = useState('Yeah')
    
    const onClickHandler = () => {
        setJournalList([...journalList,journalData])
        setJournalData('')
    }
    const onChangeHandler = (val) => {
        console.log(val)
        setJournalData(val)
    }   
    return(
        <div className={classes.box}>
        
        {journalData}
        
        <form>
    
            <label htmlFor ="journal">Journal Entry</label> 
            <Input value={journalData} onChange ={onChangeHandler} name = "journal" as="textarea" rows="3" placeholder="Textarea"/>
        
            <Button onClick={onClickHandler} appearance = "primary" color = "green">Submit Form</Button>
        </form>
    </div>
    );
       
};

export default Form;
  