import { GetCategories } from "./database.js";

export const ListCategories = () => {
    const categories = GetCategories()
    let categoryHtml = ``
    for (const category of categories) {
        categoryHtml += `<li> ${category.name} </li>`
    }
    return categoryHtml
}
