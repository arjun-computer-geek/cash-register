const checkBtn = document.getElementById('check-btn');
const errorField = document.querySelector('.error');
const noteField = document.querySelector('#note-field');
const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]


//showing error to error box
const showError = (message) => {
    errorField.innerHTML = message
}

const printNumberOfNotes = (numOfNotes) => {
    
        noteField.innerHTML += `<td> ${numOfNotes} </td>`;
}

//calculating the number of notes
const calculateNotes = (amount) => {

    //traversing through notes
    notes.forEach( note => {
        
        // Finding number of notes
        const numOfNotes = Math.trunc(amount / note);

        //calculating remaining amount
        amount = amount % note;

        //printing number of notes in table-data field
        printNumberOfNotes(numOfNotes)
    })
}

//Validating the bill amounts
const validateAmount = () => {
    const billAmount = parseInt(document.querySelector('#bill-amount').value);
    const cashGiven = parseInt(document.getElementById('cash-given').value);

    if(billAmount > 0){
        if(cashGiven >= billAmount){
            showError('');
            noteField.innerHTML = '<th>No. of notes</th>';
            calculateNotes(cashGiven - billAmount)
        }
        else{
            showError('Give me more cash.')
        }
    }
    else{
        showError('Invalid Amount')
    }
}

checkBtn.addEventListener('click', validateAmount)

// noteField.innerHTML = '<th>No. of notes</th>';