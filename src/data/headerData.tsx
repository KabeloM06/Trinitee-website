// Header navigation data
export const navigationItems = [
  { id: 1, label: 'TAP Method', path: '/tap-method' },
  { id: 2, label: 'About Us', path: '/about-us' },
  { id: 3, label: 'Services', path: '/services' },
  { id: 4, label: 'Insights', path: '/insights' },
  { id: 5, label: 'Contact', path: '/contact' }
]

export const bookingButton = {
  label: 'Book Discovery Session',
  path: '/book-session'
}

export const logoText = 'Home'

// Navigation handlers
export const handleLogoClick = () => {
  // Handle logo click
  console.log('Navigate to home...')
}

export const handleNavItemClick = (path: string) => {
  // Handle navigation item click
  console.log(`Navigate to ${path}...`)
}

export const handleBookingClick = () => {
  // Handle booking button click
  console.log('Navigate to booking session...')
}