document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const todoList = document.getElementById('todoList');

    // Liste için ilk verileri yükle
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(data => {
            renderTodoList(data);
        });

    // Form gönderildiğinde
    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Form verilerini al
        const title = document.getElementById('title').value;
        const completed = document.getElementById('completed').checked;

        // Yeni bir liste öğesi oluştur
        const newTodo = {
            title: title,
            completed: completed
        };

        // Liste öğesini ekle
        addTodoToList(newTodo);

        // Formu temizle
        todoForm.reset();

        // Uyarı mesajını göster
        showSuccessMessage();
    });

    // Liste öğelerini render et
    const renderTodoList = (todos) => {
        todoList.innerHTML = ''; // Önceki içeriği temizle

        const ulElement = document.createElement('ul');

        todos.forEach(todo => {
            const liElement = document.createElement('li');
            liElement.classList.add('list-item');

            liElement.innerHTML = `
                <div class="todo-title">
                    <strong>${todo.title}</strong>
                </div>
                <div class="todo-situation">
                    <p>Durum</p>
                    ${todo.completed ? '<i class="material-icons done">done</i>' : '<i class="material-icons close">close</i>'}
                </div>
            `;

            ulElement.appendChild(liElement);
        });

        todoList.appendChild(ulElement);
    }

    // Yeni bir liste öğesini listeye ekle
    const addTodoToList = (todo) => {
        const ulElement = todoList.querySelector('ul');

        if (!ulElement) {
            // Eğer ulElement henüz oluşturulmamışsa, oluştur
            const newUlElement = document.createElement('ul');
            newUlElement.appendChild(createLiElement(todo));
            todoList.appendChild(newUlElement);
        } else {
            // Eğer ulElement zaten varsa, mevcut ulElement'e ekle
            ulElement.appendChild(createLiElement(todo));
        }
    }

    // Yeni bir li öğesini oluştur
    const createLiElement = (todo) => {
        const liElement = document.createElement('li');
        liElement.classList.add('list-item');

        liElement.innerHTML = `
            <div class="todo-title">
                <strong>${todo.title}</strong>
            </div>
            <div class="todo-situation">
                <p>Durum</p>
                ${todo.completed ? '<i class="material-icons done">done</i>' : '<i class="material-icons close">close</i>'}
            </div>
        `;

        return liElement;
    }

    // Uyarı mesajını göster
    const showSuccessMessage = () => {
        alert('Todo başarıyla eklendi!');
    }
});
