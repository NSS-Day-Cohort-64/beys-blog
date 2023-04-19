import { getArticles } from "./database.js"

export const articleList = () => {
  const articles = getArticles()
  let htmlString = ""
  for(let article of articles) {
    htmlString += `
      <div>${article.headline}</div>
    `
  }
  return htmlString
}