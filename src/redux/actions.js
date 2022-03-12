import { COMMENTS_LOAD, COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, DECREMENT, INCREMENT, INPUT_TEXT } from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT,
  }
}
export function decrementLikes() {
  return {
    type: DECREMENT,
  }
}
export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  }
}
export function commentCreate(text,id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  }
}
export function commentUpdate(text,id) {
    return {
      type: COMMENT_UPDATE,
      data: { text, id },
    }
  }
  export function commentDelete(id) {
    return {
      type: COMMENT_DELETE,
      id
    }
  }
  export function commentsLoad() {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        const jsonData = await response.json();
        dispatch({
            type:COMMENTS_LOAD,
            data:jsonData
        })
    }
  }
//   export function loaderDisplayOn() {
//     return {
//       type: LOADER_DISPLAY_ON,
//     }
//   }
//   export function loaderDisplayOff() {
//     return {
//       type: LOADER_DISPLAY_OFF,
//     }
//   }