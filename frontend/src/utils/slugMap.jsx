// src/utils/slugMap.js
import axios from "axios";

export const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

const createSlugMap = (categories) => {
  const map = {};

  categories.forEach((cat) => {
    const catSlug = slugify(cat.name);
    map[catSlug] = cat.name;

    cat.subcategories.forEach((sub) => {
      const subSlug = slugify(sub.name);
      map[`${catSlug}/${subSlug}`] = sub.name;

      sub.products.forEach((prod) => {
        const prodSlug = slugify(prod.name);
        map[`${catSlug}/${subSlug}/${prodSlug}`] = prod.name;
      });
    });
  });

  return map;
};

export const fetchSlugMap = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    return createSlugMap(res.data);
  } catch (err) {
    console.error("Error fetching slug map:", err);
    return {};
  }
};
