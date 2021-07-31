import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Container } from 'semantic-ui-react'

const ChaptersShowPage = () => {
    const [chapters, setChapters] = useState([])
    const { bookId } = useParams()
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch(`https://co-author-backend.herokuapp.com${bookId}/chapters`)
            const chps = await res.json()
            setChapters(chps)
        }, 1000);
    }, [chapters])
    const createPath = `/books/${bookId}/write-chapter`

    return (
        <Container style={{ margin: "40px" }}>
            {chapters.map((c) => {
                const readPath = `/books/${bookId}/chapter/${c.id}`
                return (
                    <Link to={readPath}>
                        <Card style={{ padding: "20px" }}>
                            <Card.Header>{c.heading}</Card.Header>
                        </Card>
                    </Link>
                )
            })}
            <Card color="teal" style={{ padding: "20px" }}>
                <Card.Header style={{ padding: "10px" }}>What happens next?</Card.Header>
                <Link to={createPath}><Button color="teal">Write a Chapter</Button></Link>
            </Card>
        </Container>
    )
}

export default ChaptersShowPage