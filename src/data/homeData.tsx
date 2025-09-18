// Home page content and data
export const homeContent = {
  hero: {
    title: 'Transform Your Potential',
    description: 'Unlock your full potential with our proven methodologies and expert guidance. Experience transformation through purposeful action and strategic thinking.'
  },
  methodology: {
    discoverTitle: 'Discover TAP Methodology',
    deepDiveTitle: 'Deep Dive Into The Art of The Possible'
  },
  footer: {
    titles: [
      'Personal Growth',
      'Professional Development', 
      'Leadership Training',
      'Strategic Planning'
    ]
  }
}

// Navigation handlers
export const handleMethodologyClick = () => {
  // Handle methodology navigation
  console.log('Navigate to TAP Methodology...')
}

export const handleFooterItemClick = (item: string) => {
  // Handle footer item click
  console.log(`Navigate to ${item}...`)
}