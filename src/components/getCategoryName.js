export default function getName(name, id = Date.now()) {
    return {
        name: name,
        id: id
    };
}