export function managePresents(state = { numberOfPresents: 0}, action){

  switch(action.type){
    case "INCREASE":
      return {...prevState, numberOfPresents: prevState.numberOfPresents + 1 }
  }
}
