import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Rating,
} from '@mui/material'
import {
  TrendingUp,
  Speed,
  AttachMoney,
  Schedule,
} from '@mui/icons-material'
import Header from '../components/Header'

const Results: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'white' }}>
      {/* Header */}
      <Header transparentOnTop={false} />

      {/* Spacer for fixed nav */}
      <Box sx={{ height: 80 }} />

      {/* Real Results Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ 
              color: '#22d3ee', 
              fontWeight: 600, 
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            }}>
              PROVEN RESULTS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#1e293b',
                mb: 2,
                px: { xs: 2, sm: 0 },
              }}
            >
              Real Results From Real SMME Owners
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#64748b', 
              maxWidth: 768, 
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1.125rem' },
              px: { xs: 2, sm: 0 },
            }}>
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
                    p: { xs: 3, sm: 4 },
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
                  <stat.icon className="stat-icon" sx={{ fontSize: { xs: 32, sm: 40 }, color: stat.color, mb: 2, transition: 'color 0.3s ease' }} />
                  <Typography variant="h2" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
                    {stat.value}
                    <Typography component="span" variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                      {stat.suffix}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500, opacity: 0.9, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
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
    </Box>
  )
}

export default Results
