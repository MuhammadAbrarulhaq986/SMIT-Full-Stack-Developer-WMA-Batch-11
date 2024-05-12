document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var row = document.createElement('tr');
    for (var pair of formData.entries()) {
        var cell = document.createElement('td');
        cell.textContent = pair[1];
        row.appendChild(cell);
    }
    var deleteCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        row.remove();
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    var editCell = document.createElement('td');
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
        var editForm = document.createElement('form');
        editForm.innerHTML = `
        <label for="fname">First Name:</label><br>
        <input type="text" id="fname" name="fname" value="${row.querySelector('td:nth-child(1)').textContent}"><br>
        <label for="lname">Last Name:</label><br>
        <input type="text" id="lname" name="lname" value="${row.querySelector('td:nth-child(2)').textContent}"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" value="${row.querySelector('td:nth-child(3)').textContent}"><br>
        <input type="submit" value="Save">
      `;
        editForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = new FormData(editForm);
            for (var pair of formData.entries()) {
                row.querySelector('td:nth-child(' + (parseInt(pair[0]) + 1) + ')').textContent = pair[1];
            }
            editForm.remove();
        });
        row.appendChild(editForm);
    });
    document.querySelector('#studentTable tbody').appendChild(row);
});