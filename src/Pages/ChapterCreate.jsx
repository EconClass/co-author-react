import { Dictionary, Thesaurus, WriteSection } from '../Components'
import { Grid } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

const CreateChapterPage = () => {
    let { bookId } = useParams()
    return (
        <Grid
            columns={2}
            padded="vertically"
            doubling
            divided="vertically"
        >
            <Grid.Column width={13}>
                <WriteSection bookId={bookId} />
            </Grid.Column>

            <Grid.Column width={3}>
                <Grid>
                    <Grid.Row>
                        <Dictionary />
                    </Grid.Row>
                    <Grid.Row>
                        <Thesaurus />
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid>
    )
}

export default CreateChapterPage
