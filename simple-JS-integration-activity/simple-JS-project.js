function AgeClicked() {
    const sections = ['age', 'grid', 'loop'];
    sections.forEach(section => {
    document.getElementById('${section}-section').style.display = section === 'age' ? 'block' : 'none';
    document.getElementById('active-able-${section}').classList.toggle('active', section === 'age');
    });
}

function GridClicked() {
    const sections = ['age', 'grid', 'loop'];
    sections.forEach(section => {
        document.getElementById('${section}-section').style.display = section === 'grid' ? 'block' : 'none';
        document.getElementById('active-able-${section}').classList.toggle('active', section === 'grid');
    });
    document.getElementById('gridPrint').style.display = 'none';
}

function LinePrintClicked() {
    const sections = ['age', 'grid', 'loop'];
    sections.forEach(section => {
        document.getElementById('${section}-section').style.display = section === 'loop' ? 'block' : 'none';
        document.getElementById('active-able-${section}').classList.toggle('active', section === 'loop');
    });
}

function CheckAge() {
    var input = document.getElementById('age').value;
    var age = parseInt(input);
    
    if (isNaN(age))
        window.alert('Invalid input. Please ensure that what you typed is an integer.');
    else {
        if (age >= 18)
            window.alert('You are a legal adult now!');
        else if (age >= 1 && age < 18)
            window.alert('You are still a minor!');
        else
            window.alert('Invalid age.');
        if (age % 2 == 0 && age > 0)
            window.alert("You inputted an EVEN number!");
    }
}

function printGrid() {
    var number = 0;
    var content = '';

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            while (number % 2 != 0)
                number++;
            content += '&nbsp;&nbsp;&nbsp;' + number;
            number++;
        }
    content += '<br>';
    }

    document.getElementById('gridPrint').innerHTML = content;
    document.getElementById('gridPrint').style.display = "block";
}

function HideGrid() { document.getElementById('gridPrint').style.display = "none"; }

function PrintFirstTen() {
    var count = 0;
    var content = '';

    while (count < 20) {
        if (count % 2 == 0)
            if (count == 18)
                content += count + ' ';
            else
                content += count + ', ';
        count++;
    }

    document.getElementById('firstTen').innerHTML = content;
    document.getElementById('firstTen').style.display = "block";
}

function HideFirstTen() { document.getElementById('firstTen').style.display = "none"; }

function PrintLastTen() {
    var maxNum = 100;
    var count = 1;
    var content = '';

    while (count <= 10) {
        if (maxNum % 2 != 0) {
            if (count == 10)
                content += maxNum + ' ';
            else
                content += maxNum + ', ';
            count++;
        }
        maxNum--;
    }

    document.getElementById('lastTen').innerHTML = content;
    document.getElementById('lastTen').style.display = "block";
}

function HideLastTen() { document.getElementById('lastTen').style.display = "none"; }

