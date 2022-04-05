import {createStore} from "redux";

const initialState = {
    participantes:[
        {   id: 1,
            nombre: 'Romi Jimenez',
            foto: ''},
        {   id: 2,
            nombre: 'Otoniel Reyes',
            foto: ''},
        {   id: 3,
            nombre: 'Victor Rodriguez',
            foto: ''},
        {   id: 4,
            nombre: 'Federico Gomez',
            foto: ''},
        {   id: 5,
            nombre: 'Juan Boujon',
            foto: ''},
        {   id: 6,
            nombre: 'Rafael Segovia',
            foto: ''},
        {   id: 7,
            nombre: 'Diego Avila',
            foto: ''},
        {   id: 8,
            nombre: 'Pablo Pelardas',
            foto: ''},
        {   id: 9,
            nombre: 'Andres Espinoza',
            foto: ''},
        {   id: 10,
            nombre: 'Gonzalo Madona',
            foto: ''},
        {   id: 11,
            nombre: 'Mariano Dunand',
            foto: ''}
],
sup: [],
penitencia: []
}

const reducerEquipo = (state = initialState, action) => {
    switch(action.type){
        case 'AGREGAR_SUP': 
            return({...state,
                sup: state.sup.concat(action.payload),
                participantes: state.participantes.filter( agregar => agregar.id !== action.payload.id)
            });
        case 'ELIMINAR_DEL_SUP':
            return({...state,
                sup: state.sup.filter( quitar => quitar.id !== action.payload.id),
                Participantes: state.Participantes.concat(action.payload)
            });
        case 'ARGEGAR_PENITENCIA':
            return({...state,
                penitencia: state.penitencia.concat(action.payload),
                participantes: state.participantes.filter( agregar => agregar.id !== action.payload.id)
            });
        case 'ELIMINAR_PENITENCIA':
            return({...state,
                Participantes: state.Participantes.filter( quitar => quitar.id !== action.payload.id),
                penitencia: state.penitencia.concat(action.payload)
            });
        default: return ({state})
    }
}
console.log(1+1)
export default createStore(reducerEquipo)