import { FunctionComponent } from 'react'

import { Layout, CustomerLogos } from '@components'
import { useHubSpot, useChiliPiper } from '@hooks'

const Contact: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '202906aa-b46d-4657-86c4-30fbfda2413f',
        targetId: 'hubspotRequestTrialForm',
    })
    useChiliPiper()

    return (
        <Layout
            className="pt-0"
            minimal={true}
            meta={{
                description: 'Get your team started with a free trial of Sourcegraph.',
            }}
        >
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Sign up for a free trial</h1>
                            <h3 className="font-weight-light">
                                To start your free Sourcegraph trial, tell us a bit about yourself.
                            </h3>
                            <div className="mt-5">
                                <div id="hubspotRequestTrialForm" className="d-flex justify-center" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <CustomerLogos />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
