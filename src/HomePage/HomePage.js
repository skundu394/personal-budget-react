import React from "react"; 
    
function HomePage() {
    return ( 
        <div className="container center">
        {/* <!-- This is an A11y Change,  Accessible Images with alt --> */}
        <img src="bg.png" alt="Mobile and Desktop accessible for personal budget management." />
        <div className="page-area">

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Donut Chart</h1>
                <p>
                    <canvas id="myDonutChart" width="400" height="400"></canvas>
                </p>
            </div>
    
            <div className="text-box">
                <h1>Chart</h1>
                <p>
                        <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </div>
    
            <div className="text-box">
            <h1>Ask AI!</h1>
            <h2>Expense Tracker</h2>
                <form action="/track-expenses" method="POST">
                    <label htmlFor="expense-name">Expense Name:</label>
                    <input type="text" id="expense-name" name="expenseName" required /><br /><br />

                    <label htmlFor="expense-amount">Amount:</label>
                    <input type="number" id="expense-amount" name="expenseAmount" required /><br /><br />

                    <label htmlFor="expense-category">Category:</label>
                    <select id="expense-category" name="expenseCategory" required>
                        <option value="groceries">Groceries</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="transportation">Transportation</option>
                        <option value="utilities">Utilities</option>
                    </select><br /><br />

                    <input type="submit" value="Track Expense" />
                </form>
            </div>


            <div className="text-box">
    {/* This is an SEO Change */}
    <h1>Savings Goals</h1>
    <form action="/set-goals" method="POST">
        <label htmlFor="goal-name">Goal Name:</label><br />
        <input type="text" id="goal-name" name="goalName" /><br /><br />
        
        <label htmlFor="goal-amount">Goal Amount:</label><br />
        <input type="number" id="goal-amount" name="goalAmount" /><br /><br />
        
        <label htmlFor="goal-duration">Time to Reach Goal (months):</label><br />
        <input type="number" id="goal-duration" name="goalDuration" /><br /><br />
        
        <input type="submit" value="Set Goal" />
    </form>
</div>

<div className="text-box">
    {/* This is an SEO Change */}
    <h1>Budget Forecast</h1>
    <form action="/forecast-budget" method="POST">
        <label htmlFor="forecast-months">Forecast for next (months):</label><br />
        <input type="number" id="forecast-months" name="forecastMonths" min="1" max="12" /><br /><br />
        
        <input type="submit" value="Get Forecast" />
    </form>

    <h2>Recommended Savings</h2>
    <p>Based on your past expenses, AI recommends reducing dining expenses by 15% to save an extra $200/month.</p>
</div>

<div className="text-box">
    {/* This is an SEO Change */}
    <h1>Set Bill Reminders</h1>
    <form action="/set-reminders" method="POST">
        <label htmlFor="bill-name">Bill Name:</label><br />
        <input type="text" id="bill-name" name="billName" /><br /><br />
        
        <label htmlFor="due-date">Due Date:</label><br />
        <input type="date" id="due-date" name="dueDate" /><br /><br />
        
        <input type="submit" value="Set Reminder" />
    </form>
</div>

        </div>

    </div>
    );
}

export default HomePage;