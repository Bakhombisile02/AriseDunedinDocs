import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ 
        width: '32px', 
        height: '32px', 
        backgroundColor: '#e74c3c', 
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        A
      </div>
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>ARISE Dunedin</span>
    </div>
  ),
  project: {
    link: 'https://github.com/Bakhombisile02/AriseDunedinDocs',
  },
  docsRepositoryBase: 'https://github.com/Bakhombisile02/AriseDunedinDocs/tree/main',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()}{' '}
        <a href="https://www.arisechurch.com/" target="_blank" rel="noopener noreferrer">
          ARISE Church Dunedin
        </a>
        . All rights reserved.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ARISE Dunedin Documentation" />
      <meta property="og:description" content="Comprehensive documentation for ARISE Church Dunedin teams and operations" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 348, // Red color matching ARISE Church branding
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – ARISE Dunedin Docs'
    }
  },
}

export default config