import React from 'react'
import { Container, Form, Card } from 'semantic-ui-react'

const WriteSection = ({ bookId }) => (
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
            >
                <Form.Input
                    label='Chapter Heading'
                    id='chapter-heading'
                    placeholder='Chapter 1'
                />

                <Form.TextArea
                    label='Chapter Text'
                    placeholder='Write your story...'
                    rows={20}
                />
                <input type="hidden" name="bookID" value={bookId} />
                <Form.Button>Save</Form.Button>
            </Form>
        </Card>
    </Container >
)

export default WriteSection