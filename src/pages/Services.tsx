import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material'
import {
  Inventory2Outlined,
  AccountBalanceWalletOutlined,
  SupportAgentOutlined,
  PrecisionManufacturingOutlined,
  ComputerOutlined,
  TrendingUpOutlined,
  SecurityOutlined,
  TransformOutlined,
  BarChartOutlined,
  AssignmentTurnedInOutlined,
} from '@mui/icons-material'
import Header from '../components/Header'

const Services: React.FC = () => {
  const aiAgents = [
    {
      title: 'Inventory Management AI',
      description:
        'Predicts demand, auto-orders stock, negotiates with suppliers, and optimizes inventory levels to prevent stockouts and excessive carrying costs.',
      features: [
        'Automated reorder point calculations',
        'Supplier relationship management',
        'Demand forecasting',
      ],
      color: '#334155',
      icon: <Inventory2Outlined sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Financial Management AI',
      description:
        'Optimizes cash flow, restructures payments, identifies cost savings, and provides real-time financial insights for decision making.',
      features: [
        'Cash flow optimization',
        'Automated expense categorization',
        'Smart invoice grading reporting',
      ],
      color: '#334155',
      icon: <AccountBalanceWalletOutlined sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Customer Relationship AI',
      description:
        'Automates follow-ups, improves retention rates, identifies upsell opportunities, and personalizes customer experiences at scale.',
      features: [
        'Automated customer segmentation',
        'Personalized communication campaigns',
        'Churn prediction and prevention',
      ],
      color: '#334155',
      icon: <SupportAgentOutlined sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Operations AI',
      description:
        'Streamlines processes, reduces errors, improves efficiency, and ensures quality control across all operational activities.',
      features: [
        'Process automation and optimization',
        'Quality control monitoring',
        'Performance analytics and reporting',
      ],
      color: '#334155',
      icon: <PrecisionManufacturingOutlined sx={{ fontSize: 40 }} />,
    },
  ]

  const corporateServices = [
    {
      title: 'TECHNOLOGY SOLUTIONS',
      icon: <ComputerOutlined sx={{ fontSize: 48 }} />,
    },
    {
      title: 'BUSINESS CONSULTING',
      icon: <TrendingUpOutlined sx={{ fontSize: 48 }} />,
    },
    {
      title: 'CYBER SECURITY',
      icon: <SecurityOutlined sx={{ fontSize: 48 }} />,
    },
    {
      title: 'DIGITAL TRANSFORMATION',
      icon: <TransformOutlined sx={{ fontSize: 48 }} />,
    },
    {
      title: 'STRATEGY & PLANNING',
      icon: <BarChartOutlined sx={{ fontSize: 48 }} />,
    },
    {
      title: 'COMPLIANCE & RISK',
      icon: <AssignmentTurnedInOutlined sx={{ fontSize: 48 }} />,
    },
  ]

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'white' }}>
      {/* Header */}
      <Header transparentOnTop={false} />

      {/* Spacer for fixed nav */}
      <Box sx={{ height: 80 }} />

      {/* AI Business Team Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: '#2d3748',
                mb: 2,
              }}
            >
              Your Complete AI Business Team
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              Four specialized AI agents working 24/7 to optimize every aspect of your business
              operations.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {aiAgents.map((agent, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  sx={{
                    bgcolor: agent.color,
                    color: 'white',
                    borderRadius: 6,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                      background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>{agent.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1.125rem',
                      }}
                    >
                      {agent.title}
                    </Typography>
                    <Typography
                      sx={{
                        mb: 3,
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.95)',
                      }}
                    >
                      {agent.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 0, listStyle: 'none', m: 0 }}>
                      {agent.features.map((feature, idx) => (
                        <Typography
                          key={idx}
                          component="li"
                          sx={{
                            fontSize: '0.8rem',
                            mb: 1,
                            color: 'rgba(255,255,255,0.9)',
                            fontWeight: 500,
                          }}
                        >
                          • {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Corporate Service Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              sx={{
                color: '#22d3ee',
                fontWeight: 600,
                mb: 2,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: 2,
              }}
            >
              Enterprise Solutions
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: 'white',
                mb: 2,
              }}
            >
              Corporate Service
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#cbd5e1',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Comprehensive business and technology solutions for modern enterprises
            </Typography>
          </Box>

          <Grid container spacing={5} justifyContent="center">
            {corporateServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 220,
                    cursor: 'pointer',
                  }}
                >
                  {/* Hexagon Container */}
                  <Box
                    sx={{
                      width: 200,
                      height: 220,
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      bgcolor: 'rgba(226, 232, 240, 0.1)',
                      border: '2px solid rgba(34, 211, 238, 0.3)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        bgcolor: '#22d3ee',
                        border: '2px solid #22d3ee',
                        boxShadow: '0 0 40px rgba(34, 211, 238, 0.5)',
                        '& .service-icon': {
                          color: '#0f172a',
                          transform: 'scale(1.2)',
                        },
                        '& .service-title': {
                          color: '#0f172a',
                        },
                      },
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{
                        color: '#22d3ee',
                        mb: 2,
                        transition: 'all 0.4s ease',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      className="service-title"
                      sx={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'center',
                        px: 3,
                        transition: 'all 0.4s ease',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        lineHeight: 1.4,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Services