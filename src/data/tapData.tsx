// Tap page content and data
export const tapContent = {
  hero: {
    title: 'TAP Method',
    subtitle: 'Transform Through Action & Purpose',
    description: 'Discover how the TAP Method can revolutionize your approach to personal and professional development through our proven three-step methodology.'
  },
  video: {
    src: '', // Add video URL when available
    placeholder: 'TAP Method Introduction Video',
    alt: 'Learn about the TAP Method through our comprehensive introduction video'
  },
  methodology: {
    title: 'Deep Dive Into The Art of The Possible',
    description: 'Body text content goes here with the specified styling and transformations applied according to the original design specifications.'
  },
  pillars: [
    {
      id: 1,
      title: 'Think',
      shortTitle: 'T',
      topTitle: 'Transitioning',
      description: 'Clarify your vision and define your purpose with strategic thinking frameworks that help you understand your goals and create a clear roadmap.',
      detailedContent: 'Strategic thinking and vision clarity through proven methodologies and frameworks that help establish clear direction and purpose.'
    },
    {
      id: 2,
      title: 'Act', 
      shortTitle: 'A',
      topTitle: 'Awareness',
      description: 'Take deliberate action with proven methodologies and tools that transform your ideas into tangible results and meaningful progress.',
      detailedContent: 'Implementation and execution with systematic approaches for maximum impact and sustainable results in personal and professional growth.'
    },
    {
      id: 3,
      title: 'Progress',
      shortTitle: 'P',
      topTitle: 'Performance',
      description: 'Measure progress and iterate for continuous improvement, ensuring sustainable growth and long-term success in your endeavors.',
      detailedContent: 'Continuous improvement and measurement for sustained transformation, growth, and long-term success through data-driven insights.'
    }
  ],
  callToAction: {
    title: 'Ready to Transform?',
    description: 'Join thousands who have already experienced the power of the TAP Method and start your transformation journey today.',
    buttons: [
      {
        id: 1,
        text: 'Start Your TAP Journey',
        action: 'startJourney'
      },
      {
        id: 2,
        text: 'Explore TAP Programmes', 
        action: 'exploreProgrammes'
      }
    ]
  }
}

// Button click handlers
export const handleButtonClick = (action: string) => {
  switch (action) {
    case 'startJourney':
      // Handle start journey action
      console.log('Starting TAP journey...')
      break
    case 'exploreProgrammes':
      // Handle explore programmes action
      console.log('Exploring TAP programmes...')
      break
    default:
      console.log('Unknown action:', action)
  }
}