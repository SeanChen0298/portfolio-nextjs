import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelMonke from '../voxel-monke'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width-device-width, initial-scale=1" />
                <title>SeanChen - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <VoxelMonke />
                {children}
            </Container>
        </Box>
    )
}

export default Main