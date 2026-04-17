import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * Breadcrumb — FIX 6
 * Renders accessible breadcrumb nav + injects BreadcrumbList JSON-LD.
 *
 * Usage:
 *   <Breadcrumb crumbs={[
 *     { name: 'Home', href: '/' },
 *     { name: 'Services', href: '/services' },
 *     { name: 'Web Development' }   ← last item (no href = current page)
 *   ]} />
 */
const Breadcrumb = ({ crumbs = [] }) => {
  if (!crumbs.length) return null;

  const schemaItems = crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    ...(crumb.href ? { item: `https://vsgrps.com${crumb.href}` } : {}),
  }));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: schemaItems,
        })}</script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol
          className="breadcrumb__list"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            listStyle: 'none',
            padding: '0.75rem 0',
            margin: 0,
            fontSize: '0.875rem',
          }}
        >
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li
                key={index}
                className="breadcrumb__item"
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                {!isLast && crumb.href ? (
                  <>
                    <Link
                      to={crumb.href}
                      style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
                    >
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true" style={{ color: 'var(--text-secondary)' }}>›</span>
                  </>
                ) : (
                  <span
                    aria-current="page"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {crumb.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
