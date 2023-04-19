import { ListCategories } from "./categories.js";


export const BeyBlog = () => {
    const categories = ListCategories()
  return `
        <article class="authors column">
            <h2>Authors</h2>
        </article>
        <article class="articles column">
            <h2>Articles</h2>
        </article>
        <article class="categories column">
            <h2>Categories</h2>
            ${categories}
        </article>
    `;
};
