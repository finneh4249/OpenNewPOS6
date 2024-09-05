document.querySelector('.showPrices').addEventListener('click', function(){
    if (this.children[1].textContent === "OFF") {
        this.children[1].textContent = "ON";
        this.children[1].style.color = "green";
    } else {
        this.children[1].textContent = "OFF";
        this.children[1].style.color = "red";
    }
})

document.querySelectorAll('.itemButton').forEach(button => {
    let counter = 0;
    button.addEventListener('click', function(){
        let select = document.querySelector('#currentOrder select');
        let option = document.createElement('option');
        let text = '';
        for (const child of this.children) {
            if (child instanceof HTMLSpanElement) {
                text += child.textContent + ' ';
            }
        }
        text = text.trim();
        const existingOption = Array.from(select.options).find(option => option.value === text);
        if (existingOption) {
            existingOption.textContent = `${++counter} ${text}`;
        } else {
            option.value = text;
            option.textContent = `${++counter} ${text}`;
            select.appendChild(option);
        }
        select.value = text;
    })
})

let numberString = '';
document.querySelectorAll('.numberButton').forEach(button => {
    button.addEventListener('click', function(){
        numberString += parseInt(this.textContent);
        document.querySelector('#numberButtonDisplay').textContent = numberString;
    })
})

document.querySelectorAll('.itemButton').forEach(button => {
    const select = document.querySelector('#currentOrder select');
    button.addEventListener('click', function(){
        if (numberString.length > 0 && select.value) {
            const number = parseInt(numberString);
            console.log(number);
            numberString = '';
            document.querySelector('#numberButtonDisplay').textContent = '';
            const text = Array.from(this.children)
                .filter(child => child instanceof HTMLSpanElement)
                .map(child => child.textContent)
                .join(' ');
            const existingOption = Array.from(select.options).find(option => option.value === text);
            if (existingOption) {
                existingOption.textContent = `${parseInt(existingOption.textContent) + number} ${text}`;
            } else {
                const option = document.createElement('option');
                option.value = text;
                option.textContent = `${number -1} ${text}`;
                select.appendChild(option);
            }
        }
    })
})

document.querySelector('#voidLine').addEventListener('click', function(){
    const selectedOption = document.querySelector('#currentOrder select').selectedOptions[0];
    const select = document.querySelector('#currentOrder select');
    const previousOrders = document.querySelector('#previousOrders select');
    if (selectedOption && select.value) {
        if (numberString.length > 0) {
            let number = parseInt(numberString);
            numberString = '';
            document.querySelector('#numberButtonDisplay').textContent = '';
            for (let i = 0; i < number; i++) {
              let text = select.value;
              for (const child of this.children) {
                if (child instanceof HTMLSpanElement) {
                    text += child.textContent + ' ';
                }
            }
                text = text.trim();
                const existingOption = Array.from(select.options).find(option => option.value === text);
                if (existingOption) {
                    existingOption.textContent = `${parseInt(existingOption.textContent) - number} ${text}`;
                    existingOption.style.textDecoration = 'line-through';
                    select.removeChild(existingOption);
                    previousOrders.appendChild(existingOption);
                }
            }
        }
    }

})
