import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const title = props.title;
    const amount = props.amount;
    const date = props.date;
    return (
        <div className="expenses">
            <ExpenseItem 
            title={title} 
            amount={amount} 
            date={date}
            />
        </div>
    );
};

export default Expenses;