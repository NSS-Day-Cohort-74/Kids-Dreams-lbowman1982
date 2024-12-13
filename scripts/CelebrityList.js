import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvt) => {
        const celebClicked = clickEvt.target

        if (celebClicked.dataset.type === "celebrity") {
            window.alert(`${celebClicked.dataset.name} plays ${ celebClicked.dataset.sport }`)
        }
    }
)


export const Celebrities = () => {
    let html = "<ul>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="--${celebrity.id}"
                    data-name="${celebrity.name}"
                    >${celebrity.name}
                </li>`
    }

    html += "</ul>"
    return html
}
