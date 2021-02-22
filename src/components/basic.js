export default function basic() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
            <h1>TODO APP</h1>
            <div class="container-fluid">
                <div class="category">
                    <form id="category">
                        <input type="text" placeholder="category-name">
                        <button type="submit">Add</button>
                    </form>
                    <div id="category-list">
                        <div class="category-list-name">
                            <p>Default category</p>
                            <p><input type="radio" name="category" class="myRadio" checked value="default"></p>
                        </div>
                    </div>
                </div>
                <div class="task">
                    <form id="task">
                        <input type="text" id="title" placeholder="your title">
                        <button type="submit">Create Task</button>
                    </form>
                    <ul class="task-list">

                    </ul>
                </div>
                <div class="details">
                    <form id="details">
                        <textarea id="description" cols="30" rows="10" placeholder="Description"></textarea><br>
                        <label for="date">Due Date</label><br>
                        <input type="date" id="date"><br>
                        <select id="priority">
                            <option value="normal">Normal</option>
                            <option value="urgent">Urgent</option>
                        </select>
                        &nbsp;<label for="priority">Choose Your Priority</label>
                    </form>
                </div>
            </div>
        `
    return container
}