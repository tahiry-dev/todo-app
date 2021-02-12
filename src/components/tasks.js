export default class Tasks {

    constructor(category, title, description, date, priority) {
        this.category = category
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    create() {
        const task_object = {
            title: localStorage.setItem("title", this.title),
            description: localStorage.setItem("description", this.description),
            date: localStorage.setItem("date", this.date),
            priority: localStorage.setItem("priority", this.priority)
        }

    }

    delete(task) {
        localStorage.removeItem(task);
    }

}   