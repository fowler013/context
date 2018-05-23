document.addEventListener('DOMContentLoaded', function () {
    //CAN ONLY USE 'VAR' WHEN DECLARING. CAN NOT USE 'LET' OR 'CONST'
    var friends = ['brian', 'tyler', 'rachel', 'austin', 'clint'];
    var locations = ['pool', 'bedroom', 'bathroom', 'livingroom', 'backyard', 'gameroom', 'kitchen', 'garage', 'office', 'frontyard'];
    var tools = ['rock', 'paper', 'stick', 'pen', 'pencil',
        'air', 'fire', 'water', 'grass', 'dirt',
        'ball', 'boots', 'socks', 'shirt', 'shorts',
        'sound of rap', 'sound of Rock n Roll', 'sound of folk', 'sound of country', 'sound of techno']


    //this will be the function that inserts 100 h3
//added a reload() funnction to reload the page after the ok button is clicked on the alert on line 21.
    for (var i = 1; i < 101; i++); { //this will be my for loop
        var friend = Math.floor(Math.random() * 5); //this will randomly pick friends in my friends array
        var location = Math.floor(Math.random() * 10); // this will randomly pick the location in my locations array
        var tool = Math.floor(Math.random() * 20); //this will randomly pick the tool in my tools array
        var h = document.createElement('h3');
        h.innerText = 'Who was it!!'.toUpperCase();
        h.addEventListener('click', function (fri, lo, to) {
            alert('I accuse' + ' ' + friends[fri].toUpperCase() + ' ' + 'with the' + ' ' + tools[to].toUpperCase() + ' ' + 'in the' + ' ' + locations[lo].toUpperCase() + '!'); 
            window.location.reload(true);
        }.bind(i, friend, location, tool));
        document.getElementById('div').appendChild(h);
    }
})
