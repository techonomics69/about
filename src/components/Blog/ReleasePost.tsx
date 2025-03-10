import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { PostComponentProps } from '@interfaces/posts'
import { formatDate } from '@util'

interface Props extends PostComponentProps {}

/**
 * A post about a release.
 */
export const ReleasePost: FunctionComponent<Props> = ({
    post,
    content,
    url,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = false,
}) => {
    const body = (
        <>
            {content && (
                <div className="card-body release-post__body">
                    <MDXRemote {...content} />
                </div>
            )}

            <h3 className="card-body pb-2 pt-4 m-0 release-post__changelog-header">Changelog highlights</h3>

            <div className="release-post__items list-group list-group-flush">
                {post.frontmatter.changelogItems?.map(({ url, category, description }) => (
                    <a
                        href={url}
                        className="release-post__item d-md-flex list-group-item list-group-item-action"
                        key={url}
                    >
                        <span className="release-post__item-category mb-2 mb-md-0">
                            <span className="release-post__item-category-badge">{category}</span>
                        </span>
                        <span className="release-post__item-description">{description}</span>
                    </a>
                ))}
            </div>

            <ul className="card-body list-unstyled d-flex flex-wrap mb-0">
                <li className="release-post__help-item">
                    <a href="https://docs.sourcegraph.com/admin/install">How to install</a>
                </li>
                <li className="release-post__help-item">
                    <a href="https://docs.sourcegraph.com/admin/updates">How to upgrade</a>
                </li>
                <li className="flex-1" />
                <li className="release-post__help-item">
                    <a href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md">
                        Full changelog
                    </a>
                </li>
            </ul>

            <div className="card-body release-post__body">
                * Please <Link href="/demo">contact Sourcegraph</Link> with any licensing questions.
            </div>
        </>
    )

    return (
        <Tag className={`release-post ${className}`}>
            <header className={`release-post__header ${headerClassName}`}>
                <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link href={url} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={`d-block ${titleLinkClassName}`}>{post.frontmatter.title}</a>
                        </Link>
                    ) : (
                        post.frontmatter.title
                    )}
                </h1>

                {post.frontmatter.publishDate && (
                    <time className="text-muted" dateTime={post.frontmatter.publishDate}>
                        {formatDate(post.frontmatter.publishDate)}
                    </time>
                )}
            </header>

            <div className="card-body">{body}</div>
        </Tag>
    )
}
