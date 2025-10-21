import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Rating,
  Divider,
} from '@mui/material'
import {
  ArrowForward,
  CheckCircle,
  TrendingUp,
  Speed,
  AttachMoney,
  Schedule,
} from '@mui/icons-material'
import Header from '../components/Header'

const Home: React.FC = () => {
  const problems = [
    {
      title: "You're the Bottleneck",
      description: "Every decision, every problem, every opportunity needs you. The business can't scale because you can't clone yourself.",
      color: '#334155'
    },
    {
      title: "Budget Killing",
      description: "You hired better systems and clever financial experts, but every move complexity to your day.",
      color: '#334155'
    },
    {
      title: "Missing Opportunities",
      description: "While you're stuck in check competitors with better systems are seizing market share.",
      color: '#334155'
    },
    {
      title: "Isolated Mode",
      description: "You're trying 70-hour weeks just to maintain what you built. Not find the other way around.",
      color: '#334155'
    }
  ]

  const stages = [
    {
      title: "Transitioning",
      description: "Complete business X-ray and AI agent placement. We analyze systems and build autonomous operations migration minimum.",
      points: [
        "Business diagnostic & 5-key areas",
        "AI deployment and immediate process optimization"
      ],
      gradient: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
      hoverGradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)'
    },
    {
      title: "Awareness",
      description: "Systematic transformation with real-time monitoring. Your AI agents deliver intelligence-driven decision capability.",
      points: [
        "Proven AI autonomous transformation",
        "Automated decisions implementation"
      ],
      gradient: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
      hoverGradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)'
    },
    {
      title: "Performance",
      description: "Investment-ready business with documented processes and validated reporting preparation completed.",
      points: [
        "Investment-grade reporting mechanisms prepared",
        "Scalable growth systems"
      ],
      gradient: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
      hoverGradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)'
    }
  ]

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'white' }}>
      {/* Header */}
      <Header transparentOnTop={true} />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #0f172a 100%)',
          color: 'white',
          pt: { xs: 16, md: 20 },
          pb: { xs: 10, md: 15 },
          overflow: 'hidden',
        }}
      >
        {/* Background Effects */}
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <Box
            sx={{
              position: 'absolute',
              top: 80,
              left: 40,
              width: 288,
              height: 288,
              bgcolor: '#22d3ee',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 80,
              right: 40,
              width: 384,
              height: 384,
              bgcolor: '#3b82f6',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ animation: 'fadeIn 1s ease-out' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Transform Your Business with{' '}
                  <Box component="span" sx={{ color: '#22d3ee' }}>
                    AI-Powered Solutions
                  </Box>
                </Typography>
                <Typography variant="h6" sx={{ color: '#cbd5e1', mb: 4, lineHeight: 1.6 }}>
                  Watch your SMME transform into an investment-ready powerhouse through autonomous AI agents
                  that don't just analyze—they execute.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: '#22d3ee',
                      color: '#1e293b',
                      borderRadius: 50,
                      px: 4,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#06b6d4',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Transform My Business Now
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      borderWidth: 2,
                      borderRadius: 50,
                      px: 4,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: 'white',
                        color: '#1e293b',
                        borderWidth: 2,
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    See How It Works
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 384,
                }}
              >
                <Box
                  component="img"
                  src="/images/logo.png"
                  alt="Trinitee Logo"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 30px rgba(34, 211, 238, 0.3))',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Problem Section */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#1e293b',
                mb: 2,
              }}
            >
              Why 70% of South African SMMEs Fail Within 3 Years
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: 768, mx: 'auto' }}>
              You started your business with big dreams, but now you're trapped in a cycle that's slowly
              killing your ambitions.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {problems.map((problem, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  sx={{
                    bgcolor: problem.color,
                    color: 'white',
                    borderRadius: 6,
                    p: 4,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                      {problem.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      {problem.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* System Section */}
      <Box
        id="services"
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Introducing the World's First Autonomous Business Transformation System
            </Typography>
            <Typography variant="h6" sx={{ color: '#cbd5e1', maxWidth: 900, mx: 'auto' }}>
              What if you could have a team of world-class business consultants, data analysts, and operations
              managers working on your challenges 24/7—for less than you'd pay a single junior employee?
            </Typography>
          </Box>

          <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="/images/AKHA IMAGE.png"
              alt="AI Business Transformation"
              sx={{
                width: '100%',
                maxWidth: 1200,
                height: { xs: 300, md: 400 },
                objectFit: 'contain',
                display: 'block',
                pointerEvents: 'none',
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[
              {
                title: 'Autonomous Execution',
                description:
                  'While you sleep, our AI auto-orders inventory, negotiates with suppliers, restructures payments, and adjusts pricing based on market shifts—ensuring maximum profitability.',
              },
              {
                title: 'Data-Driven Intelligence',
                description:
                  'Every decision backed by analysis of 150+ similar businesses, industry benchmarks, and real-time market data. Your business becomes transformation-ready.',
              },
              {
                title: 'Complete Transformation',
                description:
                  'Unlike consultants who build one area, our system optimizes your entire business model: customer acquisition, operations, finance, and growth strategy.',
              },
              {
                title: 'Continuous Evolution',
                description:
                  'Your business adapts and improves automatically as market conditions change, ensuring you stay ahead of manually-operated competitors.',
              },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                <CheckCircle sx={{ color: '#22d3ee', fontSize: 32, flexShrink: 0, mt: 0.5 }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: '#cbd5e1', lineHeight: 1.6 }}>{item.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#22d3ee',
                color: '#1e293b',
                borderRadius: 50,
                px: 4,
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#06b6d4',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Transform My Business Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* TAP Section */}
      <Box id="methodology" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#1e293b',
                mb: 2,
              }}
            >
              TAP: Your 90-Day Transformation Journey
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: 768, mx: 'auto' }}>
              Our proprietary TAP methodology has successfully transformed 150+ South African businesses with a
              94% success rate.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {stages.map((stage, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    background: stage.gradient,
                    color: 'white',
                    borderRadius: 6,
                    p: 4,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      background: stage.hoverGradient,
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                      {stage.title}
                    </Typography>
                    <Typography sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      {stage.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {stage.points.map((point, idx) => (
                        <Box key={idx} component="li" sx={{ display: 'flex', gap: 1 }}>
                          <CheckCircle sx={{ fontSize: 20, flexShrink: 0, mt: 0.25 }} />
                          <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>{point}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#22d3ee',
                color: '#1e293b',
                borderRadius: 50,
                px: 4,
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#06b6d4',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Transform My Business Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Real Results Section */}
      <Box id="results" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: '#22d3ee', fontWeight: 600, fontSize: '1rem' }}>
              PROVEN RESULTS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#1e293b',
                mb: 2,
              }}
            >
              Real Results From Real SMME Owners
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: 768, mx: 'auto' }}>
              These aren't hypothetical projections—these are actual results from South African businesses just like yours.
            </Typography>
          </Box>

          {/* Statistics */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {[
              { value: '32', label: 'Average Growth Rate', suffix: '%', icon: TrendingUp, color: '#22d3ee' },
              { value: '94', label: 'Success Rate', suffix: '%', icon: Speed, color: '#22d3ee' },
              { value: '25', label: 'Average ROI', suffix: 'x', icon: AttachMoney, color: '#22d3ee' },
              { value: '8', label: 'Mo. Payback', suffix: '', icon: Schedule, color: '#22d3ee' },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 4,
                    bgcolor: 'white',
                    color: '#1e293b',
                    border: '2px solid #e2e8f0',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      bgcolor: '#22d3ee',
                      color: 'white',
                      border: '2px solid #22d3ee',
                      boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
                      '& .stat-icon': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <stat.icon className="stat-icon" sx={{ fontSize: 40, color: stat.color, mb: 2, transition: 'color 0.3s ease' }} />
                  <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.value}
                    <Typography component="span" variant="h3" sx={{ fontWeight: 700 }}>
                      {stat.suffix}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500, opacity: 0.9 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Testimonials */}
          <Grid container spacing={4}>
            {[
              {
                rating: 5,
                text: "I'm a scientist, Trinitee is more like automation than consulting. Within 3 months, my retail business transformed from chaos to clockwork. Sales up 43%, but more importantly—I'm not working weekends anymore.",
                name: "Sarah Thandazela",
                title: "Retailer, Johannesburg",
                company: "R4.8M Annual Revenue",
              },
              {
                rating: 5,
                text: "I almost sold my manufacturing business last year due to cash flow stress. Trinitee's AI optimized our entire supply chain in 60 days. We went from struggling to profitable—and got a R2.5M investment offer.",
                name: "Thabo M.",
                title: "Manufacturer",
                company: "Cape Town",
              },
              {
                rating: 5,
                text: "Working with Trinitee felt like having a CFO, COO, and Business Strategist—all for less than one junior manager's salary. The ROI speaks for itself: 328% in 8 months.",
                name: "Zanele K.",
                title: "Service Provider",
                company: "Durban",
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    border: '2px solid #e2e8f0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '2px solid #22d3ee',
                      boxShadow: '0 10px 30px rgba(34, 211, 238, 0.2)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography sx={{ color: '#475569', lineHeight: 1.7, mb: 3, flex: 1 }}>
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: '#22d3ee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: '#1e293b' }}>{testimonial.name}</Typography>
                      <Typography sx={{ fontSize: '0.875rem', color: '#64748b' }}>
                        {testimonial.title}
                      </Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#1e293b',
                mb: 2,
              }}
            >
              Choose Your Business Transformation Path
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="stretch">
            {/* Growth Plan */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: 'white',
                  border: '2px solid #e2e8f0',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    bgcolor: '#22d3ee',
                    color: 'white',
                    border: '2px solid #22d3ee',
                    boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
                    '& .price-text': {
                      color: 'white',
                    },
                    '& .feature-text': {
                      color: 'white',
                    },
                    '& .check-icon': {
                      color: 'white',
                    },
                    '& .divider': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                    },
                    '& .cta-button': {
                      bgcolor: 'white',
                      color: '#22d3ee',
                      borderColor: 'white',
                    },
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b', mb: 1, transition: 'color 0.3s ease' }}>
                  Growth Plan
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#22d3ee', mb: 3, transition: 'color 0.3s ease' }}>
                  R1,000
                  <Typography component="span" variant="h6" className="price-text" sx={{ color: '#64748b', fontWeight: 500, transition: 'color 0.3s ease' }}>
                    /month
                  </Typography>
                </Typography>
                <Divider className="divider" sx={{ mb: 3, transition: 'background-color 0.3s ease' }} />
                <Box component="ul" sx={{ pl: 0, listStyle: 'none', mb: 4, flex: 1 }}>
                  {[
                    'Complete business transformation',
                    'Autonomous AI agent implementation',
                    '24/7 automated operations monitoring',
                    'Data-driven decision support',
                    'Monthly performance optimization',
                    'Investment-ready documentation',
                    'Priority email & chat support',
                  ].map((feature, idx) => (
                    <Box key={idx} component="li" sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                      <CheckCircle className="check-icon" sx={{ color: '#22d3ee', fontSize: 20, flexShrink: 0, mt: 0.25, transition: 'color 0.3s ease' }} />
                      <Typography className="feature-text" sx={{ color: '#475569', transition: 'color 0.3s ease' }}>{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                  className="cta-button"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: '#22d3ee',
                    color: '#22d3ee',
                    borderWidth: 2,
                    borderRadius: 50,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started
                </Button>
              </Card>
            </Grid>

            {/* Pro Plan - Featured */}
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'relative', height: '100%' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: '#1e293b',
                    color: 'white',
                    px: 3,
                    py: 0.5,
                    borderRadius: 50,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    zIndex: 10,
                  }}
                >
                  MOST POPULAR
                </Box>
                <Card
                  sx={{
                    p: 4,
                    pt: 6,
                    borderRadius: 4,
                    bgcolor: 'white',
                    border: '2px solid #e2e8f0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      bgcolor: '#22d3ee',
                      color: 'white',
                      border: '2px solid #22d3ee',
                      boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
                      '& .price-text': {
                        color: 'white',
                      },
                      '& .feature-text': {
                        color: 'white',
                      },
                      '& .check-icon': {
                        color: 'white',
                      },
                      '& .divider': {
                        bgcolor: 'rgba(255,255,255,0.3)',
                      },
                      '& .cta-button': {
                        bgcolor: 'white',
                        color: '#22d3ee',
                      },
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b', mb: 1, transition: 'color 0.3s ease' }}>
                    Pro Plan
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#22d3ee', mb: 3, transition: 'color 0.3s ease' }}>
                    R2,500
                    <Typography component="span" variant="h6" className="price-text" sx={{ color: '#64748b', fontWeight: 500, transition: 'color 0.3s ease' }}>
                      /month
                    </Typography>
                  </Typography>
                  <Divider className="divider" sx={{ mb: 3, transition: 'background-color 0.3s ease' }} />
                  <Box component="ul" sx={{ pl: 0, listStyle: 'none', mb: 4, flex: 1 }}>
                    {[
                      'Everything in Growth Plan',
                      'Advanced AI predictive analytics',
                      'Real-time market intelligence',
                      'Automated competitive analysis',
                      'Custom AI agent development',
                      'Weekly strategy sessions',
                      'Dedicated success manager',
                      'API access for integrations',
                      'Priority 24/7 support',
                    ].map((feature, idx) => (
                      <Box key={idx} component="li" sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                        <CheckCircle className="check-icon" sx={{ color: '#22d3ee', fontSize: 20, flexShrink: 0, mt: 0.25, transition: 'color 0.3s ease' }} />
                        <Typography className="feature-text" sx={{ color: '#475569', transition: 'color 0.3s ease' }}>{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    className="cta-button"
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: '#22d3ee',
                      color: 'white',
                      borderRadius: 50,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#06b6d4',
                      },
                    }}
                  >
                    Transform My Business
                  </Button>
                </Card>
              </Box>
            </Grid>

            {/* Enterprise Plan */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: 'white',
                  border: '2px solid #e2e8f0',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    bgcolor: '#22d3ee',
                    color: 'white',
                    border: '2px solid #22d3ee',
                    boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
                    '& .price-text': {
                      color: 'white',
                    },
                    '& .feature-text': {
                      color: 'white',
                    },
                    '& .check-icon': {
                      color: 'white',
                    },
                    '& .divider': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                    },
                    '& .cta-button': {
                      bgcolor: 'white',
                      color: '#22d3ee',
                      borderColor: 'white',
                    },
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b', mb: 1, transition: 'color 0.3s ease' }}>
                  Enterprise
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#1e293b', mb: 3, transition: 'color 0.3s ease' }}>
                  Custom
                </Typography>
                <Divider className="divider" sx={{ mb: 3, transition: 'background-color 0.3s ease' }} />
                <Box component="ul" sx={{ pl: 0, listStyle: 'none', mb: 4, flex: 1 }}>
                  {[
                    'Everything in Pro Plan',
                    'Multi-location support',
                    'Enterprise-grade security',
                    'Custom AI model training',
                    'White-label options',
                    'On-site implementation',
                    'SLA guarantees',
                    '24/7 dedicated support team',
                  ].map((feature, idx) => (
                    <Box key={idx} component="li" sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                      <CheckCircle className="check-icon" sx={{ color: '#22d3ee', fontSize: 20, flexShrink: 0, mt: 0.25, transition: 'color 0.3s ease' }} />
                      <Typography className="feature-text" sx={{ color: '#475569', transition: 'color 0.3s ease' }}>{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                  className="cta-button"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: '#1e293b',
                    color: '#1e293b',
                    borderWidth: 2,
                    borderRadius: 50,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Sales
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
          }
        `}
      </style>
    </Box>
  )
}

export default Home