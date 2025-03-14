import { FunctionComponent } from 'react'

import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'

const LEADERS: {
    name: string
    image: string
    title: string
    bio: string
    github: string
    linkedin: string
    twitter: string
}[] = [
    {
        name: 'Quinn Slack',
        image: '/staff/avatar-quinn.png',
        title: 'CEO and Cofounder',
        bio: 'https://handbook.sourcegraph.com/company/team#quinn-slack',
        github: 'https://github.com/sqs',
        linkedin: 'https://www.linkedin.com/in/quinnslack',
        twitter: 'https://twitter.com/sqs',
    },
    {
        name: 'Beyang Liu',
        image: '/staff/avatar-beyang.png',
        title: 'CTO and Cofounder',
        bio: 'https://handbook.sourcegraph.com/company/team#beyang-liu',
        github: 'https://github.com/beyang',
        linkedin: 'https://www.linkedin.com/in/beyang-liu',
        twitter: 'https://twitter.com/beyang',
    },
    {
        name: 'Christina Forney',
        image: '/staff/avatar-christina.png',
        title: 'Product Advisor',
        bio: 'https://handbook.sourcegraph.com/company/team#christina-forney',
        github: 'https://github.com/christinaforney',
        linkedin: 'https://www.linkedin.com/in/christinaforney',
        twitter: 'https://twitter.com/christina4nee',
    },
    {
        name: 'Nick Snyder',
        image: '/staff/avatar-nick.png',
        title: 'Engineering Advisor',
        bio: 'https://handbook.sourcegraph.com/team/#nick-snyder',
        github: 'https://github.com/nicksnyder',
        linkedin: 'https://www.linkedin.com/in/nickdsnyder',
        twitter: 'https://twitter.com/nickdsnyder',
    },
    {
        name: 'Dan Adler',
        image: '/staff/avatar-dan.jpg',
        title: 'VP Operations',
        bio: 'https://handbook.sourcegraph.com/company/team#dan-adler',
        github: 'https://github.com/dadlerj',
        linkedin: 'https://www.linkedin.com/in/danielnealadler',
        twitter: 'https://twitter.com/DanielNealAdler',
    },
    {
        name: 'Gregg Stone',
        image: '/staff/avatar-gregg.jpg',
        title: 'VP Sales',
        bio: 'https://handbook.sourcegraph.com/company/team#gregg-stone',
        github: 'https://github.com/sourcegraph',
        linkedin: 'https://www.linkedin.com/in/stonegregg',
        twitter: 'https://twitter.com/sourcegraph',
    },
    {
        name: 'Carly Jones',
        image: '/staff/avatar-carly.png',
        title: 'VP Talent & People',
        bio: 'https://handbook.sourcegraph.com/company/team#carly-jones',
        github: 'https://github.com/carlyj0nes',
        linkedin: 'https://www.linkedin.com/in/carlycjones/',
        twitter: 'https://twitter.com/sourcegraph',
    },
    {
        name: 'Aimee Menne',
        image: '/staff/avatar-aimee.jpg',
        title: 'VP Customer Engineering',
        bio: 'https://handbook.sourcegraph.com/company/team#aimee-menne',
        github: 'https://github.com/amenne',
        linkedin: 'https://www.linkedin.com/in/aimee-menne-8343487/',
        twitter: 'https://twitter.com/sourcegraph',
    },
]

export const LeadershipSection: FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="leadership" className={`leadership-section ${className}`}>
        <h2>Leadership</h2>
        <div className="row my-5">
            {LEADERS.map(staff => (
                <div key={`${staff.name.replace(' ', '-').toLowerCase()}`} className="col-lg-4 my-4">
                    <a href={staff.bio}>
                        <img
                            className="max-w-200 rounded-circle mb-4"
                            src={staff.image}
                            alt={`Sourcegraph team: ${staff.name} - ${staff.title}`}
                        />
                    </a>
                    <h5>
                        <a href={staff.bio} className="text-dark">
                            {staff.name}
                        </a>
                    </h5>
                    <p className="mb-0">{staff.title}</p>
                    <ul className="nav mt-1">
                        <li className="nav-item p-1">
                            <a
                                href={staff.github}
                                target="_blank"
                                rel="nofollow noreferrer"
                                aria-label="GitHub"
                                className="text-dark"
                            >
                                <GithubIcon />
                            </a>
                        </li>
                        <li className="nav-item p-1">
                            <a
                                href={staff.twitter}
                                target="_blank"
                                rel="nofollow noreferrer"
                                aria-label="Twitter"
                                className="text-dark"
                            >
                                <TwitterIcon />
                            </a>
                        </li>
                        <li className="nav-item p-1">
                            <a
                                href={staff.linkedin}
                                target="_blank"
                                rel="nofollow noreferrer"
                                aria-label="LinkedIn"
                                className="text-dark"
                            >
                                <LinkedinIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
)
