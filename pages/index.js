import NextLink from 'next/link'
import {
  Container,
  Box,
  Image,
  Heading,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        p={3}
        mb={6}
        align="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Software Engineer from Malaysia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Chen Yoon Sean
          </Heading>
          <p>
            Software Engineer / Science &amp; Technology Hobbyist / Orchestral
            Player
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sean.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Biography
        </Heading>
        <Paragraph>
          Sean is a Software Engineer based in Malaysia with experience in
          building, restructuring and optimizing ASP.NET Core APIs and web
          platforms. He is a core developer and team player in numerous
          rearchitecting projects. In his free time, he loves going outside for
          walks, hiking and doing sports like swimming and playing badminton. He
          used to be a performer in two orchestra based in Malaysia, and now he
          is still enjoying wide range of music genres.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Background
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Kuala Lumpur, Malaysia.
        </BioSection>
        <BioSection>
          <BioYear>2011 to 2016</BioYear>
          Graduated from Tsun Jin High School 循人中學 as a Science Student with
          Unified Examination Certificate (UEC) and Malaysian Certificate
          of Education (SPM).
        </BioSection>
        <BioSection>
          <BioYear>2017 to 2019</BioYear>
          Completed the Degree&apos;s Program in Asia Pacific University of
          Technology &amp; Innovation (APU) with First Class Honours majoring in
          Bachelor of Science (B.S.) in Software Engineering.
        </BioSection>
        <BioSection>
          <BioYear>2020 to 2021</BioYear>
          Worked at Nettium Sdn. Bhd. as a Software Engineer.
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
