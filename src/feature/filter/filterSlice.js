export const StatusFilter = {
  All: "all",
  Active: "active",
  Completed: "completed"
};

const initialState = {
  status: StatusFilter.All,
  colors: []
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/statusFilterChanged": {
      return {
        ...state,
        status: action.payload
      };
    }
    case "filters/colorFilterChanged": {
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          if (state.colors.includes(color)) {
            return state;
          }
          return {
            ...state,
            colors: [...state.colors, color]
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            )
          };
        default:
          return state;
      }
    }
    default:
      return state;
  }
}
