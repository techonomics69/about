import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout } from '@components'

export const Report: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Cool Vendors in Software Engineering: Enhancing Developer Productivity',
            description:
                'Get free access to Gartner’s 2022 Cool Vendor Report to learn how Sourcegraph and other innovative tools help engineers and engineering leaders boost developer productivity while mitigating security risks.',
        }}
    >
        <GatedResourceLayout
            title="Cool Vendors in Software Engineering: Enhancing Developer Productivity"
            customer={{
                name: 'Gartner',
                logo: '/external-logos/gartner-cool-vendor-2022.png',
            }}
            formLabel="Access the report"
            form={{
                formId: '4f5b127f-4d42-490a-a970-686574d0e542',
                onFormSubmitted: () =>
                    window.open('https://www.gartner.com/doc/reprints?id=1-2A44UTV8&ct=220524&st=sb'),
            }}
            description={
                <section className="col-md-6 col-12 pr-lg-6">
                    <h3 className="font-weight-normal pb-5">
                        Get complimentary access to the 2022 Gartner® Cool Vendors™ report.
                    </h3>
                    <p className="pb-2">
                        Learn how we believe Sourcegraph and other innovative tools help engineers and engineering
                        leaders boost developer productivity while mitigating security risks.
                    </p>
                    <p className="text-muted">
                        The GARTNER COOL VENDOR badge and Gartner are registered trademarks and service mark of Gartner,
                        Inc. and/or its affiliates and is used herein with permission. All rights reserved. Gartner does
                        not endorse any vendor, product or service depicted in its research publications and does not
                        advise technology users to select only those vendors with the highest ratings or other
                        designation. Gartner research publications consist of the opinions of Gartner’s Research &
                        Advisory organization and should not be construed as statements of fact. Gartner disclaims all
                        warranties, expressed or implied, with respect to this research, including any warranties of
                        merchantability or fitness for a particular purpose.
                    </p>
                    <p className="pb-2 text-muted">
                        Gartner, Cool Vendors in Software Engineering: Enhancing Developer Productivity, Cool Vendors in
                        Software Engineering: Enhancing Developer Productivity, 16th May 2022.
                    </p>
                </section>
            }
        />
    </Layout>
)

export default Report
