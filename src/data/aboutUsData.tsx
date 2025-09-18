// About Us page content and data
export const aboutUsContent = {
  title: 'About Us',
  sections: {
    whoWeAre: {
      title: 'Who We Are',
      content: 'We are passionate professionals dedicated to transforming businesses through innovative strategies and personalized solutions. Our team combines deep industry expertise with cutting-edge methodologies to deliver exceptional results for our clients.'
    },
    mission: {
      title: 'Our Mission',
      content: 'To empower organizations and individuals to reach their full potential through strategic guidance, innovative thinking, and actionable insights that drive sustainable growth and success.'
    },
    values: {
      title: 'Our Values',
      items: [
        {
          id: 1,
          title: 'Excellence',
          description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations and create lasting impact.'
        },
        {
          id: 2,
          title: 'Innovation',
          description: 'We embrace innovative thinking and cutting-edge approaches to solve complex challenges and create breakthrough opportunities.'
        },
        {
          id: 3,
          title: 'Integrity',
          description: 'We operate with the highest level of integrity, building trust through transparency, honesty, and ethical business practices.'
        }
      ]
    },
    team: {
      title: 'Our Team',
      content: 'Our diverse team of experts brings together decades of combined experience across various industries and disciplines. We collaborate closely to ensure every client receives personalized attention and tailored solutions that address their unique challenges and opportunities.'
    },
    approach: {
      title: 'Our Approach',
      content: 'We believe in a collaborative, data-driven approach that combines strategic thinking with practical implementation. Our methodology ensures sustainable results by focusing on both immediate wins and long-term transformation.'
    }
  }
}

// Section interaction handlers
export const handleSectionClick = (sectionName: string) => {
  // Handle section interactions
  console.log(`Interacting with ${sectionName} section...`)
}