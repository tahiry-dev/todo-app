export default function show_project_name(val) {
    const list = document.createElement('ul');
    list.className = "list-group"
    list.innerHTML = `
        <li class="list-group-item">${val}</li>
    `
    return list
}