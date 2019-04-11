import axios from "axios";

const BASE_URL = "http://localhost:3000";
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`
  }
});

const createCategory = async category => {
  const respData = await api.post(`/categories`, category);
  console.log("this is create category: resp", respData);
  return respData;
};

const updateCategory = async (user_id, cat_id, edits) => {
  console.log("making an edit request with this data", edits);
  const respData = await api.put(
    `/users/${user_id}/categories/${cat_id}`,
    edits
  );
  console.log("this is edit category: resp", respData);
  return respData;
};

const fetchCategories = async () => {
  const respData = await api.get(`/categories`);
  console.log("this is fetch category: resp", respData);
  return respData;
};

const deleteCategory = async cat_id => {
  const respData = await api.delete(`/categories/${cat_id}`);
  console.log("this is delete category: resp", respData);
  return respData;
};

const createQuestion = async (user_id, cat_id, questionData) => {
  const respData = await api.post(
    `/users/${user_id}/categories/${cat_id}/questions`,
    questionData
  );
  console.log("this is create question: resp", respData);
  return respData;
};

const updateQuestion = async (user_id, cat_id, quest_id, edits) => {
  console.log("making an edit request with this data", edits);
  const respData = await api.put(
    `/users/${user_id}/categories/${cat_id}/questions/${quest_id}`,
    edits
  );
  console.log("this is edit question: resp", respData);
  return respData;
};

const fetchQuestions = async user_id => {
  const respData = await api.get(`/users/${user_id}/questions`);
  console.log("this is fetch questions: resp", respData);
  return respData;
};

const deleteQuestion = async (user_id, cat_id, quest_id) => {
  const respData = await api.delete(
    `/users/${user_id}/categories/${cat_id}/questions/${quest_id}`
  );
  console.log("this is delete questions: resp", respData);
  return respData;
};

export {
  fetchQuestions,
  deleteQuestion,
  updateQuestion,
  createQuestion,
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory
};
