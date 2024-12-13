import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvt) => {
        const childTarget = clickEvt.target

        if (childTarget.dataset.type === "child") {
            window.alert(` ${childTarget.dataset.name} would like ${childTarget.dataset.wish} wish`)
        }
    }
)

export const Kids = () => {
    let html = "<ul>"

    for (const child of children) {
        html += `<li 
        data-id="${child.id}" 
        data-type="child"
        data-wish="${child.wish}"
        id=--${child.id}
        data-name="${child.name}"
        >${child.name}
        </li>`
    }

    html += "</ul>"
    return html
}

