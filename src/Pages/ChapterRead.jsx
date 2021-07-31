import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Container } from 'semantic-ui-react'

const OneChapter = () => {
    const [bookId, chapId] = useParams()
    const [chapter, setChapter] = useState({})
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch(`https://co-author-backend.herokuapp.com${bookId}/chapters/${chapId}`)
            const chp = await res.json()
            setChapter(chp)
        }, 1000);
    }, [books])
    return (
        <Container width={14}>
            <Card>
                <Card.Header>{chapter.heading}</Card.Header>
                <Card.Content>{chapter.content}</Card.Content>
            </Card>
        </Container>
    )
}

export default OneChapter