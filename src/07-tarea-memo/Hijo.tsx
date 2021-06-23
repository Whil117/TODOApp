import React, { FC  } from 'react'

interface DATOS {
    numero:number
    incrementar:Function
}

// eslint-disable-next-line react/display-name
export const Hijo:FC<DATOS> = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');
    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ ()=>incrementar(numero) }
        >
            { numero }
        </button>
    )
}
)