import { React, useState, useEffect } from 'react'
import { Card, Label, Search } from 'semantic-ui-react'

const Thesaurus = () => {
    const [term, setTerm] = useState('')
    const [synonyms, setSynonyms] = useState([])

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch(`https://co-author-backend.herokuapp.com/t/${term}`)
            const syn = await res.json()
            setSynonyms(syn.synonyms)
        }, 1000);
    }, [term])

    const handleOnChange = (e) => {
        setTerm(e.target.value)
    }
    return (
        <Card >
            <Label size="massive">Thesaurus</Label>
            <Card.Content>
                <Search
                    showNoResults={false}
                    icon='search'
                    placeholder='Search...'
                    onSearchChange={handleOnChange}
                />
            </Card.Content>

            <Label size="huge">Synonyms for "{term}"</Label>
            <Card.Content>
                {synonyms.map((s) => <Card.Header>{s}</Card.Header>)}
            </Card.Content>
        </Card>
    )
};
export default Thesaurus;