import axios from "axios";

async function storeExpense(expenseData) {
    try {
        const response = await axios.post(
            "https://the-expense-tracker-app-aee4c-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
            expenseData
        );
        console.log("Expense stored:", response.data);
        return response.data; // Firebase'in döndürdüğü ID'yi alabilirsin
    } catch (error) {
        console.error("Error storing expense:", error);
    }
}
