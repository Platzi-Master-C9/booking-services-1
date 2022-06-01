const boom = require('@hapi/boom');

async function createBookmark(model, data) {
  try {
    const newBookmark = await model.userFavoritePlaces.create(data);
    return newBookmark;
  } catch (error) {
    return boom.badRequest(error);
  }
}

function getBookmark(model, data) {
  return data;
}

function getBookmarksList(model, data) {
  return data;
}

function updateBookmark(model, data) {
  return data;
}

function deleteBookmark(model, data) {
  return data;
}

function addItemInBookmark(model, data) {
  return data;
}

function deleteItemInBookmark(model, data) {
  return data;
}

module.exports = {
  createBookmark,
  getBookmark,
  getBookmarksList,
  updateBookmark,
  deleteBookmark,
  addItemInBookmark,
  deleteItemInBookmark,
};