import { FunctionComponent } from 'react'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { ContentSection, Layout, YouTube } from '@components'
import { buttonStyle, buttonLocation } from '@data'

export const Community: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Welcome to the Sourcegraph Community',
            description:
                "Sourcegraph is so much more than a universal code search engine. It's the story of new gen-developers who renaissance-d the way we work, live, and collaborate. It's our unparalleled thinking that creates endless possibilities, to rebuild, to disrupt and to innovate relentlessly despite all the complexities of the big code. But we're just getting started. Imagine the road ahead if we take this journey together.",
        }}
        className="community-page"
        heroAndHeaderClassName="community-page__hero-and-header"
        hero={
            <div className="container pb-4">
                <div className="row p-5">
                    <div className="col-lg-6">
                        <div className="text-uppercase">Join us</div>
                        <h1 className="display-2 font-weight-bold mb-0">Welcome to the Sourcegraph Community</h1>
                        <p className="my-5 display-5">
                            Seek guidance. Share best practices. Ask questions. The Sourcegraph Community is your new
                            platform to connect with one of the world's most talented developer communities. Here, we
                            encourage everyone to learn from each other and share everything they know. Because when we
                            collaborate, we grow faster, better, and stronger.
                        </p>
                        <a
                            className="btn btn-primary"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                            href="https://discord.gg/rDPqBejz93"
                            title="Join our Discord"
                        >
                            Join our Discord
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <img
                                className="w-100 mt-7"
                                src="/community/hero_illustration.svg"
                                alt="Sourcegraph Community"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        }
    >
        <ContentSection className="py-5 text-center">
            <h2 className="display-3 font-weight-bold mt-5 mb-3">Get up to speed</h2>
            <div className="row justify-content-center">
                <p className="col-md-8">
                    We can’t give you a 25-hour day, but here is a <a href="http://srcgr.ph/cheatsheet">speed sheet</a>{' '}
                    with the most useful Sourcegraph shortcuts. Need even more speed? Fasten your seat belt and dive
                    into our curated <a href="https://learn.sourcegraph.com/tags/sourcegraph">tutorials</a> &#38; other{' '}
                    <a href="https://docs.sourcegraph.com/">tip documents</a>.
                </p>
            </div>
            <div className="row">
                <div className="col-12 mt-4">
                    <a href="http://srcgr.ph/cheatsheet">
                        <figure>
                            <img
                                className="max-w-800 w-100"
                                src="/community/cheatsheet_top.png"
                                alt="Sourcegraph Cheatsheet"
                            />
                        </figure>
                    </a>
                </div>
            </div>
        </ContentSection>

        <ContentSection className="py-6">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="display-3 font-weight-bold mt-5 mb-3">DM us on Discord. We're here.</h2>
                    What you seek is seeking you — come, chat and collaborate with inspiring engineers like you.
                    <ul>
                        <li className="mt-2">Ask questions - any questions: what is the best sit-stand desk?</li>
                        <li className="mt-2">
                            Reach out to the community, discover new ideas &#38; seek or give mentorship
                        </li>
                        <li className="mt-2">Share the road less traveled so that everyone can learn</li>
                    </ul>
                    <a className="btn btn-primary" href="https://discord.gg/rDPqBejz93" title="Join us on Discord">
                        Join us on Discord
                    </a>
                </div>
                <div className="col-lg-5">
                    <img className="w-100 mt-6" src="/community/SG_DM_us_on_slack.png" alt="DM us on Discord!" />
                </div>
            </div>
        </ContentSection>

        <ContentSection className="py-4">
            <h2 className="display-3 font-weight-bold mb-5 text-center">What's next?</h2>
            <Tabs defaultActiveKey="sgEvents" id="use-cases" className="justify-content-center">
                <Tab eventKey="sgEvents" title="Events">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-6">
                            <p>
                                Keynote speakers. Job opportunities and partnerships. You can find us in every major
                                industry event. Give us an air-hug if you see us.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://www.gophercon.com/">GopherCon 2022</a> - 10/6 - 10/8
                                </li>
                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="devToolTime" title="Dev Tool Time">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-6">
                            <YouTube title="Dev Tool Time" id="QNYoOCLocAI" />
                            <p className="pt-3">
                                Cool hardware. Most-wanted guests. And hot topics. Check our{' '}
                                <a href="https://srcgr.ph/dev-tool-time-playlist">YouTube channel</a> and subscribe to
                                keep up with new episodes.
                            </p>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="podcast" title="Sourcegraph Podcast">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-6">
                            <YouTube title="Sourcegraph Podcast" id="VgVDMd2VlaU" />
                            <p className="pt-3">
                                <strong>Subscribe:</strong>&nbsp;
                                <a href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_jf5GDl61SvEOXvwvKS1IXA">
                                    YouTube
                                </a>
                                &nbsp;
                                <a href="https://podcasts.apple.com/us/podcast/the-sourcegraph-podcast/id1516219009">
                                    Apple
                                </a>
                                &nbsp;
                                <a href="https://open.spotify.com/show/1YlDYvCxNB7jAndbZPt5a6">Spotify</a>&nbsp;
                                <a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMDk3OTc4LnJzcw==">
                                    Google
                                </a>
                                &nbsp;
                                <a href="https://feeds.buzzsprout.com/1097978.rss">RSS</a>
                            </p>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </ContentSection>

        <ContentSection className="py-5">
            <div className="row">
                <div className="col-lg-7">
                    <h2 className="display-3 font-weight-bold mb-3">We’d love to hear from you!</h2>
                    <br />
                    Connect with us on the Sourcegraph Community Discord server, direct message us on Twitter, LinkedIn,
                    or email us at <a href="mailto:community@sourcegraph.com">community@sourcegraph.com</a>.
                </div>
                <div className="col-lg-5 mt-3">
                    <a
                        className="btn btn-secondary"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                        href="https://discord.gg/rDPqBejz93"
                        title="Join us on Discord"
                    >
                        Join us on Discord
                    </a>
                    <br />
                    <a
                        className="btn btn-primary mt-3"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                        href="mailto:community@sourcegraph.com"
                        title="Send us an email"
                    >
                        Send us an email
                    </a>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default Community
