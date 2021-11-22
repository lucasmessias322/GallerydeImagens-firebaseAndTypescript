import React from 'react'
import * as C from './styles'

type Props = {
    name: string;
    url: string;
}

function PhotoItem({name, url}: Props) {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
        </C.Container>
    )
}

export default PhotoItem
