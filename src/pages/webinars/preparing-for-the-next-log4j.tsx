import { FunctionComponent } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Layout, ContentSection, GatedResourceLayout } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const speakers = [
    {
        name: 'Jon Kohler',
        title: 'Technical Director of Solution Engineering at Nutanix',
        img: '/case-studies/jon-kohler.png',
        bio: 'Jon is a leader in the Solutions Engineering practice at Nutanix. His team covers a variety of full-stack technical solutions, focusing on both Big Data and Healthcare solutions.',
    },
    {
        name: 'Mike McLaughlin',
        title: 'Principle Customer Engineer at Sourcegraph',
        img: '/case-studies/mike-mclaughlin.png',
        bio: 'Mike is a Principal Customer Engineer at Sourcegraph working with some of today’s largest brands to solve the challenges of big code, developer velocity, and fixing vulnerabilities.',
    },
]

const Webinar: FunctionComponent = () => {
    const router = useRouter()

    return (
        <Layout
            meta={{
                title: '[On-Demand Webinar] Learn how Nutanix remediated Log4j in 4 days',
                description:
                    'On-Demand Webinar. Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their code base.',
            }}
        >
            <GatedResourceLayout
                title="Preparing for the Next Log4j"
                subtitle="How Nutanix Remediated the Vulnerability in 4 Days"
                speakers={speakers}
                customer={{
                    name: 'Nutanix',
                    logo: '/external-logos/nutanix-logo.svg',
                }}
                formLabel="Watch the on-demand webinar"
                form={{
                    formId: 'abb86998-1a6a-4cfd-9888-ffba09c850c9',
                    onFormSubmitted: () =>
                        router.push({
                            pathname: router.pathname,
                            query: 'watch-now',
                        }),
                }}
                description={
                    <section className="col-md-6 col-12 pr-lg-6">
                        <p>
                            For Nutanix, when 20,000+ of the world's most advanced data centers rely on your company's
                            software, any security vulnerability is a concern. But when the Log4j vulnerability hit,
                            rated as a 10/10 on the CVSS scale, the Nutanix team knew it had to act fast. "The more we
                            dug, the more we realized this bug was everywhere and nowhere at the same time," said
                            Nutanix Technical Director of Solution Engineering, Jon Kohler.
                        </p>
                        <p>
                            So how did Nutanix rise to the challenge of creating a cohesive response across the org's
                            multiple teams to quickly fix the Log4j vulnerability?
                        </p>
                        <p>
                            Hear firsthand from Jon Kohler, Nutanix Technical Director of Solution Engineering, about
                            how he and his team quickly identified and remediated every instance of Log4j, transforming
                            a threat to customer trust into an opportunity to strengthen it.
                        </p>
                        <p>In this session, you’ll learn:</p>
                        <ul>
                            <li className="mb-2">
                                How Jon enabled his team to confidently find & fix every instance of Log4j across a
                                sprawling codebase in under 4 days
                            </li>
                            <li className="mb-2">
                                How this experience led to a renewed trust in Nutanix's vulnerability remediation for
                                management and customers
                            </li>
                            <li className="mb-2">Best practices to prepare for the next security vulnerability</li>
                        </ul>
                    </section>
                }
                videoSrc="https://www.youtube.com/embed/ANcbjQJ0OGI"
                learnMoreCTA={
                    <ContentSection className="d-flex flex-column align-items-center py-7">
                        <h1 className="font-weight-bold text-center">Interesting in learning more?</h1>
                        <Link href="/case-studies/nutanix-fixed-log4j-with-sourcegraph" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="btn btn-primary mt-4 col-12 col-md-5 col-xl-3"
                                title="Read the Nutanix Case Study"
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Read the Nutanix Case Study
                            </a>
                        </Link>
                    </ContentSection>
                }
            />
        </Layout>
    )
}

export default Webinar
