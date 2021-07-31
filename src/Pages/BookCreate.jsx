import { Card, Form, Container } from 'semantic-ui-react'
import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const CreateBookPage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const titleChange = (e) => {
        setTitle(e.target.value)
    }
    const descChange = (e) => {
        setDescription(e.target.value)
    }

    const handleOnSubmit = async (e) => {
        console.log("hello")
        e.preventDefault()
        const url = "https://co-author-backend.herokuapp.com/books/new"
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "title": title,
                "description": description
            }
        };
        fetch(url, reqOptions)
            .then(res => console.log('Submitted successfully'))
            .catch(error => console.log('Form submit error', error))
    }

    return (
        <Container width={16}>
            <Card
                raised
                centered
                style={{ margin: "20px" }}
                fluid
            >
                <Form
                    size="huge"
                    style={{ margin: "20px" }}
                    onSubmit={handleOnSubmit}
                >
                    <Form.Input
                        label='Book Title'
                        id='chapter-heading'
                        placeholder='Title'
                        className='title'
                        onChange={titleChange}
                    />

                    <Form.TextArea
                        label='Description'
                        placeholder='Write your story...'
                        rows={10}
                        className='description'
                        onChange={descChange}
                    />
                    <Link to='/'><Form.Button type="submit">Save</Form.Button></Link>
                </Form>
            </Card>
        </Container >
    )
}

export default CreateBookPage