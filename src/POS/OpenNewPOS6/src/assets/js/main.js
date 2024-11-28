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
            let counter = 0;
            if (existingOption.textContent.includes(' ')) {
                counter = parseInt(existingOption.textContent.split(' ')[0]);
            }
            if (existingOption.style.textDecoration === "line-through") {
                counter = 0;
            }
            existingOption.textContent = `${++counter} ${text}`;
            existingOption.style.textDecoration = "none";
        } else {
            option.value = text;
            option.textContent = `1 ${text}`;
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
                existingOption.textContent = `${parseInt(existingOption.textContent) + number - 1} ${text}`;
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
    if (selectedOption) {
        const option = document.createElement('option');
        option.value = selectedOption.value;
        option.textContent = `${selectedOption.textContent} `;
        option.style.textDecoration = "line-through";
        document.querySelector('#previousOrders select').appendChild(option);
        selectedOption.remove();
        const text = selectedOption.value;
        const existingOption = Array.from(document.querySelector('#currentOrder select').options).find(option => option.value === text);
        if (existingOption) {
            existingOption.textContent = `0 ${text}`;
        }
    }
})

document.querySelectorAll('.itemButton').forEach(button => {
    button.addEventListener('click', function(){
        const select = document.querySelector('#previousOrders select');
        const selectedOptions = Array.from(select.selectedOptions);
        if (selectedOptions.length > 0) {
            let numberString = document.querySelector('#numberButtonDisplay').textContent;
            const number = parseInt(numberString) || 1;
            numberString = '';
            document.querySelector('#numberButtonDisplay').textContent = '';
            selectedOptions.forEach(option => {
                const count = parseInt(option.textContent.split(' ')[0]) - number;
                if (count > 0) {
                    option.textContent = `${count} ${option.value}`;
                } else {
                    option.remove();
                }
            })
        }
    })
})
