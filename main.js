let lists = document.getElementsByClassName('list');
let leftBox = document.getElementById('left-box');
let rightBox = document.getElementById('right-box');

for(list of lists) {
    list.addEventListener('dragstart', function(e) {
        let selected = e.target;

        rightBox.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        rightBox.addEventListener('drop', function(e) {
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function(e) {
            leftBox.appendChild(selected);
            selected = null;
        })
    })
}