import { FunctionComponent, ReactNode } from 'react'

import ClipBoardPulseOutlineIcon from 'mdi-react/ClipboardPulseOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import WrenchOutlineIcon from 'mdi-react/WrenchOutlineIcon'
import Link from 'next/link'

import {
    BackButtonBold,
    BlockquoteWithBorder,
    BlogResourceItem,
    ContentSection,
    CustomCarousel,
    CustomerLogos,
    Layout,
    QuoteCarousel,
    ThreeUpText,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

import styles from './useCases.module.scss'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h2 className="display-5 font-weight-bold mb-lg-0 mb-5">{header}</h2>
        {text}
    </>
)

const items = [
    {
        buttonLabel: 'Find old versions easily',
        text: (
            <CarouselItem
                header="Find old versions easily"
                text={
                    <p className="py-3">
                        Use{' '}
                        <Link href="/code-search" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Code Search
                            </a>
                        </Link>{' '}
                        to spot deprecated methods and APIs left in your code and share examples of how the latest
                        versions are used.
                    </p>
                }
            />
        ),
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        buttonLabel: 'Automate version updates and communications',
        text: (
            <CarouselItem
                header="Automate version updates and communications"
                text={
                    <p className="py-3">
                        With{' '}
                        <Link href="/batch-changes">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Batch Changes
                            </a>
                        </Link>
                        , you can quickly update versions and send pull requests to all your repositories as a way of
                        alerting repository owners that they need to upgrade.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Get everyone on the same page with living docs',
        text: (
            <CarouselItem
                header="Get everyone on the same page with living docs"
                text={
                    <p className="py-3">
                        Create living, actionable documentation with{' '}
                        <a href="https://docs.sourcegraph.com/notebooks">Notebooks</a> that show your best practices
                        with real-life examples you can share with your team.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Monitor for deprecated code',
        text: (
            <CarouselItem
                header="Monitor for deprecated code"
                text={
                    <p className="py-3">
                        Make sure deprecated endpoints don't sneak back into your code. Get alerts for new occurrences
                        of deprecated methods or restricted patterns with{' '}
                        <a href="https://docs.sourcegraph.com/code_monitoring">code monitoring</a>.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Develop a data-driven relationship with your code',
        text: (
            <CarouselItem
                header="Develop a data-driven relationship with your code"
                text={
                    <p className="py-3">
                        Create dashboards to track mitigations, package use, version adoption, code smells, codebase
                        size, and more to understand code health with <Link href="/code-insights">Code Insights</Link>.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
]

const threeUpTextItems = [
    {
        icon: <MagnifyIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="font-weight-bold">Find unhealthy code</h4>,
        description:
            'Build a healthier codebase by finding references to deprecated services, libraries, URL patterns, and more across all your repositories.',
    },
    {
        icon: <WrenchOutlineIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="font-weight-bold">Remediate code health issues</h4>,
        description:
            'Tackle refactoring efforts and tech debt from legacy systems and acquisitions with automated pull requests across your entire codebase.',
    },
    {
        icon: <ClipBoardPulseOutlineIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="font-weight-bold">Monitor code health initiatives</h4>,
        description:
            'Stay on top of code health changes. Monitor and measure code health initiatives and get actionable insights into the impact of large-scale changes.',
    },
]

const quoteCarouselItems = [
    {
        header: 'Indeed improves code health at scale',
        quote: "On average, I'd say that for every automated merge request that we're able to merge we save an hour…if we are doing several thousand automated merges in a year, we're saving several employee's worth of time.",
        by: 'Jared Hodge, Senior Manager, Developer Experience at Indeed',
        logoImage: '/external-logos/indeed-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/indeed-accelerates-development-velocity',
        logoAlt: 'Indeed',
    },
    {
        header: 'Quantcast accelerates large-scale refactoring',
        quote: 'Quantcast uses Sourcegraph to create burndown lists of issues and provide code owners links to Sourcegraph search results. Since Sourcegraph searches every repository, a single engineer can analyze thousands of repositories in only a few days rather than months.',
        logoImage: '/external-logos/quantcast-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/quantcast-large-scale-refactoring',
        logoAlt: 'Quantcast',
    },
    {
        header: 'Workiva efficiently pays down tech debt',
        quote: "As an organization that values paying down tech debt, Workiva's Client Platform team started using Sourcegraph to help them efficiently propagate updates to dependencies across all of their repositories without any ongoing maintenance.",
        logoImage: '/external-logos/workiva-vector-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/workiva-automates-large-scale-code-changes',
        logoAlt: 'Workiva',
    },
]

const blogResourceItems = [
    {
        title: 'How not to break a search engine or: What I learned about unglamorous engineering',
        description:
            "When Sourcegraph switched to a new search query parser, you'd never know anything had changed.  This is an account of the rigorous testing that happened behind the scenes to ensure a seamless transition.",
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/how-not-to-break-a-search-engine-new.png',
            alt: 'Unglamorous engineering blog thumbnail',
        },
        href: '/blog/how-not-to-break-a-search-engine-unglamorous-engineering',
    },
    {
        title: 'How we migrated entirely to CSS Modules using codemods and Sourcegraph Code Insights',
        description:
            "Learn how Sourcegraph's Frontend Platform team overhauled our web application's design system and UI using codemods to automate a challenging global migration to CSS modules and Code Insights to track and communicate progress.",
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migrating-to-css-modules.png',
            alt: 'CSS modules migration blog thumbnail',
        },
        href: '/blog/migrating-to-css-modules-with-codemods-and-code-insights',
    },
    {
        title: 'How we added backend integration testing to our CI pipeline',
        description:
            "Here's the story and the lessons learned from our work to remove all existing backend-related end-to-end tests and reliably run their corresponding unit and integration tests as part of our CI pipeline on all branches.",
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/backend-integration-testing/backend-integration-testing.png',
            alt: 'Backend integration testing blog thumbnail',
        },
        href: '/blog/integration-testing',
    },
]

const UseCasePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Improve Code Health | Sourcegraph',
            description:
                'Tackle refactoring efforts and tech debt from legacy systems with automated pull requests across your entire codebase to boost code health.',
        }}
        className="use-cases-page navbar-light"
        hero={
            <>
                <div className={styles.pageHeader}>
                    <div className="container pb-4">
                        <div className="row">
                            <div className="col-md-7 my-7">
                                <BackButtonBold href="/use-cases" text="USE CASES" />
                                <h1 className="display-2 font-weight-bold mb-4 max-w-250 max-w-sm-275 max-w-lg-400">
                                    Healthy code, happy teams
                                </h1>
                                <div className="display-4 font-weight-normal mb-5">
                                    Improve code health with large-scale changes and track key initiatives across your
                                    entire codebase.
                                </div>
                                <div className="flex-column flex-md-row d-md-flex text-center">
                                    <div className="mb-3 mb-md-0">
                                        <Link href="/demo" passHref={true}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a
                                                className="btn btn-primary w-100 max-w-350"
                                                title="Request a Demo."
                                                data-button-style={buttonStyle.primary}
                                                data-button-location={buttonLocation.hero}
                                                data-button-type="cta"
                                            >
                                                Request a demo
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="ml-md-3">
                                        <Link href="/get-started" passHref={true}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a
                                                className="btn btn-outline-primary w-100 max-w-350"
                                                title="Try Sourcegraph."
                                                data-button-style={buttonStyle.outline}
                                                data-button-location={buttonLocation.hero}
                                                data-button-type="cta"
                                            >
                                                Try Sourcegraph now
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    >
        <ContentSection className="my-7">
            <ThreeUpText title="Track and improve code health across your entire codebase" items={threeUpTextItems} />
        </ContentSection>

        <div className="bg-gradient-venus-radial">
            <ContentSection className="py-7">
                <div className="row flex-column flex-lg-row justify-content-between">
                    <div className="p-lg-0 col-lg-6 px-4">
                        <h2 className="mb-md-4 display-3 font-weight-bold max-w-500">
                            Improving code health can be daunting
                        </h2>
                        <p className="max-w-500">
                            Engineering teams need to track and measure code quality consistently to monitor code health
                            across their entire codebase, but current tools don't make this easy. What does that mean
                            for you?
                        </p>
                        <ul>
                            <li className="mt-1">
                                Old versions, libraries, or functions are littered throughout your code, resulting in
                                incidents and backward compatibility issues.
                            </li>
                            <li className="mt-1">
                                Unclear code ownership leads to unclear responsibility, making it hard for developers to
                                find the right domain expert when they need help.
                            </li>
                            <li className="mt-1">
                                Engineering managers struggle to justify prioritizing and addressing tech debt because
                                success is difficult to track and measure.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 mt-lg-8 mt-5">
                        <BlockquoteWithBorder
                            quote="With the help of Sourcegraph, we were able to quickly look at all clients of an API and remove unused attributes that lived in different repositories, ultimately simplifying our APIs and speeding up developer iteration time."
                            author="Justin Phillips, Software Engineer at Lyft"
                            headline="Lyft boosts code health and accelerates developer velocity"
                            logo={{
                                src: '/external-logos/lyft-logo.svg',
                                alt: 'Lyft logo',
                            }}
                            link={{
                                text: 'Read the case study',
                                href: '/case-studies/lyft-monolith-to-microservices',
                            }}
                        />
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection className="py-7">
            <CustomCarousel items={items} autoAdvance={true} title="How Sourcegraph helps" />
        </ContentSection>

        <div className="bg-gradient-saturn-saturated">
            <ContentSection>
                <QuoteCarousel items={quoteCarouselItems} />
            </ContentSection>
        </div>

        <div className="bg-light-gray-3 py-7">
            <ContentSection>
                <div className="row d-flex flex-column mx-4 mx-lg-0 align-items-lg-center align-items-left">
                    <div className="mb-5 d-flex flex-column text-start text-md-center max-w-600 mx-auto">
                        <h2 className="display-3 font-weight-bold">Get started with Sourcegraph</h2>
                        <p>Give your team the tools they need to build a healthier codebase.</p>
                    </div>
                    <div className="text-center col-12 px-0">
                        <Link href="/demo" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="btn btn-primary max-w-350 w-100"
                                title="Request a Demo."
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.bodyDemo}
                                data-button-type="cta"
                            >
                                Request a demo
                            </a>
                        </Link>
                        <Link href="/use-cases" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="d-flex justify-content-center mt-4"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                <p className="font-weight-bold">Explore other use cases</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </ContentSection>

            <div className="mt-6">
                <CustomerLogos />
            </div>
        </div>

        <ContentSection className="py-lg-7 py-5">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <h2 className="mb-5 display-3 font-weight-bold">Related resources</h2>
                </div>
                {blogResourceItems.map(item => (
                    <BlogResourceItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="d-flex flex-wrap justify-content-center text-center mb-md-4">
                <h2 className="w-100 font-weight-bold mb-4 mx-4 mx-lg-0">Ready to build a healthier codebase?</h2>
                <div className="d-flex justify-content-center mb-lg-6">
                    <Link href="/get-started" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="btn btn-primary"
                            title="Ready to get started?"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.trySourcegraph}
                            data-button-type="cta"
                        >
                            Ready to get started?
                        </a>
                    </Link>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default UseCasePage
