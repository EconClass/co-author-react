import { React, useState, useEffect } from 'react'
import { Card, Search, Label } from 'semantic-ui-react'

const Dictionary = () => {
    const [term, setTerm] = useState('')
    const [definition, setDefinition] = useState('')

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch(`https://co-author-backend.herokuapp.com/d/${term}`)
            const def = await res.json()
            setDefinition(def.definition)
        }, 1000);
    }, [term])

    const handleOnChange = (e) => {
        setTerm(e.target.value)
    }
    return (
        <Card>
            <Label size="massive">Dictionary</Label>
            <Card.Content>
                <Search
                    showNoResults={false}
                    icon='search'
                    placeholder='Search...'
                    onSearchChange={handleOnChange}
                />
            </Card.Content>
            <Card.Content>
                <Card.Header>{term}</Card.Header>
                <Card.Description>{definition}</Card.Description>
            </Card.Content>
        </Card>
    )
};
export default Dictionary;