/* eslint-disable unicorn/prevent-abbreviations */
import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout } from '@components'

export const Guide: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Developer onboarding: How is it unique? | Sourcegraph',
            description:
                'A guide to understanding how to create a developer onboarding program that differs from general employee onboarding and creates an engaged development team.',
        }}
        className="navbar-white"
    >
        <GatedResourceLayout
            title="Developer onboarding: What makes it unique?"
            subtitle="A guide to creating an effective developer onboarding program"
            formLabel="Download the guide"
            form={{
                formId: '25249bac-6544-4f50-9fc0-559745de5334',
                onFormSubmitted: () => window.open('/guides/sg-dev-onboarding-what-makes-it-unique.pdf'),
            }}
            description={
                <section className="col-md-6 col-12 pr-lg-6">
                    <p>
                        Your organization's ability to onboard new developers may be the difference between high
                        attrition rates and an engaged, productive development team. But designing effective, delightful
                        developer onboarding programs can be challenging.
                    </p>
                    <p>
                        Why? Developer onboarding and general employee onboarding are two distinct programs. When
                        companies don't understand how they differ, their developer onboarding experience can suffer.
                    </p>
                    <p>
                        <strong>So, how can companies design a developer onboarding program that works?</strong>
                    </p>
                    <p>Download the developer onboarding guide to learn:</p>
                    <ul>
                        <li className="mb-1">
                            How developer onboarding differs from general employee onboarding, and how to offer the best
                            of both
                        </li>
                        <li className="mb-1">
                            How to build the foundational <i>and</i> exceptional components of a developer onboarding
                            program
                        </li>
                        <li className="mb-1">Examples of how 3 major tech companies onboard their developers</li>
                        <li className="mb-1">And more!</li>
                    </ul>
                </section>
            }
        />
    </Layout>
)

export default Guide
