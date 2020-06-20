export const ADD_FEATURES = 'ADD_FEATURES';
export const DELETE_FEATURES = 'DELETE_FEATURES';

export const addFeatures = features => {
    return{type: ADD_FEATURES, 
        payload: features }
}

export const deleteFeatures = features => {
    return{type: DELETE_FEATURES, 
        payload: features}
}