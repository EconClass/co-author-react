import { React } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Container } from 'semantic-ui-react'

const BooksShowPage = ({ books }) => {
    return (
        <Container style={{ margin: "40px" }}>
            {books.map((b) => {
                const path = `/books/${b.id}`
                return (
                    <Link to={path}>
                        <Card style={{ padding: "20px" }}>
                            <Card.Header>{b.title}</Card.Header>
                            <Card.Content>{b.description}</Card.Content>
                        </Card>
                    </Link>
                )
            })}
            <Card color="teal" style={{ padding: "20px" }}>
                <Card.Header style={{ padding: "10px" }}>Feeling Creative?</Card.Header>
                <Link to='/write-book'><Button color="blue">Write a Book</Button></Link>
            </Card>
        </Container>
    )
}

export default BooksShowPage