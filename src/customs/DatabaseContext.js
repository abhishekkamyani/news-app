import { createContext, useContext, useReducer } from "react";


const DatabaseContext = createContext([]);
const DataDispatchContect = createContext(null);

export function DatabaseProvider({ children }) {
    const [database, dispatch] = useReducer(dataReducer, []);

    return (
        <DatabaseContext.Provider value={database}>
            <DataDispatchContect.Provider value={dispatch}>
                {children}
            </DataDispatchContect.Provider>
        </DatabaseContext.Provider>
    );
}

export function useDatabase() {
    return useContext(DatabaseContext);
}

export function useDataDispatch() {
    return useContext(DataDispatchContect);
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            return [...state, { key: action.key, data: action.data }]
        }

        default:
    }
}