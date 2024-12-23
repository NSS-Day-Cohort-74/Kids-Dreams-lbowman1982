import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (child, AllChildren) => {
    let matchedCelebrity = null

    for (const celebrity of AllChildren) {
        if (celebrity.id === child.celebrityId) {
          matchedCelebrity = celebrity  
        }
    }

    return matchedCelebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

