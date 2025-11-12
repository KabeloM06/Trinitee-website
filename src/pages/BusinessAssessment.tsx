import React, { useState } from 'react'
import { useMutation } from '@apollo/client/react'
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Divider,
  Alert,
  Modal,
  IconButton,
  Backdrop,
} from '@mui/material'
import {
  Calculate,
  Business,
  TrendingUp,
  Speed,
  Rocket,
  CheckCircle,
  Close,
  Email,
} from '@mui/icons-material'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { SUBMIT_ASSESSMENT } from '../graphql/mutations'

interface ContactInfo {
  name: string
  email: string
  phone: string
}

interface BusinessInfo {
  businessName: string
  industry: string
  yearsOperation: number
  employees: number
  location: string
  businessType: string
}

interface FinancialData {
  annualRevenue: number
  netProfit: number
  totalAssets: number
  totalLiabilities: number
  monthlyExpenses: number
  cashFlow: number
  inventoryValue: number
  equipmentValue: number
}

interface MarketData {
  marketShare: number
  customerRetention: number
  brandRecognition: number
  competitiveAdvantage: string
  customerDiversity: number
  customerSatisfaction: number
  marketGrowth: number
  onlinePresence: number
}

interface OperationalData {
  productionEfficiency: number
  technologyAdoption: number
  qualityControl: number
  employeeProductivity: number
  staffRetention: number
  trainingPrograms: number
  managementQuality: number
  systemIntegration: number
  scalability: number
}

interface GrowthData {
  marketExpansion: number
  productDevelopment: number
  strategicPartnerships: number
  innovationCapability: number
  financialResources: number
  adaptability: number
}

interface AssessmentScores {
  financial: number
  market: number
  operational: number
  growth: number
}

interface ValuationResult {
  value: number
  range: {
    low: number
    high: number
  }
  components: {
    asset: number
    revenue: number
    earnings: number
    dcf: number
  }
}

const BusinessAssessment: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitAssessment] = useMutation(SUBMIT_ASSESSMENT)

  // Contact info state
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
  })

  // Form state
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    businessName: '',
    industry: '',
    yearsOperation: 0,
    employees: 0,
    location: '',
    businessType: '',
  })

  const [financialData, setFinancialData] = useState<FinancialData>({
    annualRevenue: 0,
    netProfit: 0,
    totalAssets: 0,
    totalLiabilities: 0,
    monthlyExpenses: 0,
    cashFlow: 0,
    inventoryValue: 0,
    equipmentValue: 0,
  })

  const [marketData, setMarketData] = useState<MarketData>({
    marketShare: 0,
    customerRetention: 0,
    brandRecognition: 0,
    competitiveAdvantage: '',
    customerDiversity: 0,
    customerSatisfaction: 0,
    marketGrowth: 0,
    onlinePresence: 0,
  })

  const [operationalData, setOperationalData] = useState<OperationalData>({
    productionEfficiency: 0,
    technologyAdoption: 0,
    qualityControl: 0,
    employeeProductivity: 0,
    staffRetention: 0,
    trainingPrograms: 0,
    managementQuality: 0,
    systemIntegration: 0,
    scalability: 0,
  })

  const [growthData, setGrowthData] = useState<GrowthData>({
    marketExpansion: 0,
    productDevelopment: 0,
    strategicPartnerships: 0,
    innovationCapability: 0,
    financialResources: 0,
    adaptability: 0,
  })

  const [scores, setScores] = useState<AssessmentScores>({
    financial: 0,
    market: 0,
    operational: 0,
    growth: 0,
  })

  const [valuation, setValuation] = useState<ValuationResult>({
    value: 0,
    range: { low: 0, high: 0 },
    components: { asset: 0, revenue: 0, earnings: 0, dcf: 0 },
  })

  const calculateScores = (): AssessmentScores => {
    // Financial Health Score (0-100)
    let financialScore = 0
    const profitMargin = financialData.annualRevenue > 0 
      ? (financialData.netProfit / financialData.annualRevenue) * 100 
      : 0
    financialScore += Math.min(profitMargin * 2, 25)

    const roa = financialData.totalAssets > 0 
      ? (financialData.netProfit / financialData.totalAssets) * 100 
      : 0
    financialScore += Math.min(roa * 3, 25)

    const equity = financialData.totalAssets - financialData.totalLiabilities
    const equityRatio = financialData.totalAssets > 0 
      ? (equity / financialData.totalAssets) * 100 
      : 0
    financialScore += Math.min(equityRatio * 0.5, 25)

    const cashFlowRatio = financialData.monthlyExpenses > 0 
      ? financialData.cashFlow / financialData.monthlyExpenses 
      : 0
    financialScore += Math.min(cashFlowRatio * 10, 25)

    // Market Position Score (0-100)
    const marketScore =
      marketData.marketShare * 1.5 +
      marketData.customerRetention * 0.3 +
      marketData.brandRecognition * 8 +
      marketData.customerDiversity * 5 +
      marketData.customerSatisfaction * 7 +
      marketData.marketGrowth * 0.5 +
      marketData.onlinePresence * 4

    // Operational Efficiency Score (0-100)
    const operationalScore =
      operationalData.productionEfficiency * 8 +
      operationalData.technologyAdoption * 7 +
      operationalData.qualityControl * 9 +
      operationalData.employeeProductivity * 8 +
      operationalData.staffRetention * 0.4 +
      operationalData.trainingPrograms * 6 +
      operationalData.managementQuality * 10 +
      operationalData.systemIntegration * 7 +
      operationalData.scalability * 8

    // Growth Potential Score (0-100)
    const growthScore =
      growthData.marketExpansion * 12 +
      growthData.productDevelopment * 14 +
      growthData.strategicPartnerships * 10 +
      growthData.innovationCapability * 15 +
      growthData.financialResources * 12 +
      growthData.adaptability * 13

    return {
      financial: Math.min(Math.max(financialScore, 0), 100),
      market: Math.min(Math.max(marketScore, 0), 100),
      operational: Math.min(Math.max(operationalScore, 0), 100),
      growth: Math.min(Math.max(growthScore, 0), 100),
    }
  }

  const calculateValuation = (scores: AssessmentScores): ValuationResult => {
    const assetValue = financialData.totalAssets - financialData.totalLiabilities

    const industryMultipliers: Record<string, number> = {
      retail: 0.8,
      manufacturing: 1.2,
      services: 1.5,
      technology: 3.0,
      healthcare: 2.0,
      hospitality: 1.0,
      construction: 1.1,
      agriculture: 0.9,
    }
    const revenueMultiplier = industryMultipliers[businessInfo.industry] || 1.0
    const revenueValue = financialData.annualRevenue * revenueMultiplier

    const earningsMultiplier = 5 + scores.growth / 20
    const earningsValue = financialData.netProfit * earningsMultiplier

    const projectedCashFlow = financialData.cashFlow * 12
    const discountRate = 0.12
    const growthRate = (scores.growth / 100) * 0.1
    const dcfValue = projectedCashFlow / (discountRate - growthRate)

    const weights = {
      asset: 0.2,
      revenue: 0.25,
      earnings: 0.3,
      dcf: 0.25,
    }

    const baseValue =
      assetValue * weights.asset +
      revenueValue * weights.revenue +
      earningsValue * weights.earnings +
      dcfValue * weights.dcf

    const overallScore = (scores.financial + scores.market + scores.operational + scores.growth) / 4
    const scoreMultiplier = 0.7 + (overallScore / 100) * 0.6

    const finalValue = Math.max(baseValue * scoreMultiplier, assetValue * 0.8)

    return {
      value: finalValue,
      range: {
        low: finalValue * 0.8,
        high: finalValue * 1.2,
      },
      components: {
        asset: assetValue,
        revenue: revenueValue,
        earnings: earningsValue,
        dcf: dcfValue,
      },
    }
  }

  const handleCalculate = async () => {
    setLoading(true)
    setError(null)

    try {
      // Validate contact info
      if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) {
        throw new Error('Please provide your contact information')
      }

      // Calculate scores and valuation
      const calculatedScores = calculateScores()
      const calculatedValuation = calculateValuation(calculatedScores)

      setScores(calculatedScores)
      setValuation(calculatedValuation)

      // Save contact info and full assessment data to backend
      await submitAssessment({
        variables: {
          input: {
            name: contactInfo.name,
            email: contactInfo.email,
            phone: contactInfo.phone,
            company: businessInfo.businessName || 'Not specified',
            annualRevenue: `R${financialData.annualRevenue.toLocaleString()}`,
            challenge: `${businessInfo.industry} business seeking valuation and growth assessment`,
            businessData: JSON.stringify({
              businessInfo,
              financialData,
              marketData,
              operationalData,
              scores: calculatedScores,
              valuation: calculatedValuation,
            }),
          },
        },
      })

      // Show success modal
      setShowSuccessModal(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      <Header />

      {/* Page Heading and Intro */}
  <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 18 }, pb: 2, mt: { xs: 2, md: 4 } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 1,
            color: '#1e293b',
            fontSize: { xs: '2rem', md: '2.7rem' },
          }}
        >
          Business Value Assessment
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            color: '#64748b',
            maxWidth: 700,
            mx: 'auto',
            mb: 4,
          }}
        >
          Get a comprehensive valuation and health check for your business. Complete the form below to receive a detailed report and actionable insights.
        </Typography>
      </Container>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        {/* Contact Information */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Business sx={{ fontSize: 32, color: '#22d3ee', mr: 2 }} />
              <Typography variant="h5" fontWeight={700}>
                Your Contact Information
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  label="Full Name"
                  value={contactInfo.name}
                  onChange={(e) =>
                    setContactInfo({ ...contactInfo, name: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email Address"
                  value={contactInfo.email}
                  onChange={(e) =>
                    setContactInfo({ ...contactInfo, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  label="Phone Number"
                  value={contactInfo.phone}
                  onChange={(e) =>
                    setContactInfo({ ...contactInfo, phone: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Business Information */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Business sx={{ fontSize: 32, color: '#22d3ee', mr: 2 }} />
              <Typography variant="h5" fontWeight={700}>
                Business Information
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Business Name"
                  value={businessInfo.businessName}
                  onChange={(e) =>
                    setBusinessInfo({ ...businessInfo, businessName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="Industry"
                  value={businessInfo.industry}
                  onChange={(e) =>
                    setBusinessInfo({ ...businessInfo, industry: e.target.value })
                  }
                >
                  <MenuItem value="retail">Retail</MenuItem>
                  <MenuItem value="manufacturing">Manufacturing</MenuItem>
                  <MenuItem value="services">Services</MenuItem>
                  <MenuItem value="technology">Technology</MenuItem>
                  <MenuItem value="healthcare">Healthcare</MenuItem>
                  <MenuItem value="hospitality">Hospitality</MenuItem>
                  <MenuItem value="construction">Construction</MenuItem>
                  <MenuItem value="agriculture">Agriculture</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="Years in Operation"
                  value={businessInfo.yearsOperation || ''}
                  onChange={(e) =>
                    setBusinessInfo({
                      ...businessInfo,
                      yearsOperation: Number(e.target.value),
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="Number of Employees"
                  value={businessInfo.employees || ''}
                  onChange={(e) =>
                    setBusinessInfo({ ...businessInfo, employees: Number(e.target.value) })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Location"
                  value={businessInfo.location}
                  onChange={(e) =>
                    setBusinessInfo({ ...businessInfo, location: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="Business Type"
                  value={businessInfo.businessType}
                  onChange={(e) =>
                    setBusinessInfo({ ...businessInfo, businessType: e.target.value })
                  }
                >
                  <MenuItem value="sole-proprietorship">Sole Proprietorship</MenuItem>
                  <MenuItem value="partnership">Partnership</MenuItem>
                  <MenuItem value="pty-ltd">Pty Ltd</MenuItem>
                  <MenuItem value="cc">Close Corporation</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Financial Analysis */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <TrendingUp sx={{ fontSize: 32, color: '#10b981', mr: 2 }} />
              <Typography variant="h5" fontWeight={700}>
                Financial Analysis
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Annual Revenue (R)"
                  value={financialData.annualRevenue || ''}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      annualRevenue: Number(e.target.value),
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Net Profit (R)"
                  value={financialData.netProfit || ''}
                  onChange={(e) =>
                    setFinancialData({ ...financialData, netProfit: Number(e.target.value) })
                  }
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Total Assets (R)"
                  value={financialData.totalAssets || ''}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      totalAssets: Number(e.target.value),
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Total Liabilities (R)"
                  value={financialData.totalLiabilities || ''}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      totalLiabilities: Number(e.target.value),
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Monthly Expenses (R)"
                  value={financialData.monthlyExpenses || ''}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      monthlyExpenses: Number(e.target.value),
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Cash Flow (R)"
                  value={financialData.cashFlow || ''}
                  onChange={(e) =>
                    setFinancialData({ ...financialData, cashFlow: Number(e.target.value) })
                  }
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Inventory Value (R)"
                  value={financialData.inventoryValue || ''}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      inventoryValue: Number(e.target.value),
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Equipment Value (R)"
                  value={financialData.equipmentValue || ''}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      equipmentValue: Number(e.target.value),
                    })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Market Positioning */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Speed sx={{ fontSize: 32, color: '#ef4444', mr: 2 }} />
              <Typography variant="h5" fontWeight={700}>
                Market Positioning Assessment
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Market Factors
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Market Share (%)"
                      inputProps={{ max: 100 }}
                      value={marketData.marketShare || ''}
                      onChange={(e) =>
                        setMarketData({ ...marketData, marketShare: Number(e.target.value) })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Customer Retention Rate (%)"
                      inputProps={{ max: 100 }}
                      value={marketData.customerRetention || ''}
                      onChange={(e) =>
                        setMarketData({
                          ...marketData,
                          customerRetention: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Brand Recognition (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={marketData.brandRecognition || ''}
                      onChange={(e) =>
                        setMarketData({
                          ...marketData,
                          brandRecognition: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="Competitive Advantage"
                      value={marketData.competitiveAdvantage}
                      onChange={(e) =>
                        setMarketData({
                          ...marketData,
                          competitiveAdvantage: e.target.value,
                        })
                      }
                    >
                      <MenuItem value="price">Price Leadership</MenuItem>
                      <MenuItem value="quality">Quality Differentiation</MenuItem>
                      <MenuItem value="innovation">Innovation</MenuItem>
                      <MenuItem value="service">Superior Service</MenuItem>
                      <MenuItem value="location">Strategic Location</MenuItem>
                      <MenuItem value="brand">Strong Brand</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Customer Base
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Customer Diversity (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={marketData.customerDiversity || ''}
                      onChange={(e) =>
                        setMarketData({
                          ...marketData,
                          customerDiversity: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Customer Satisfaction (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={marketData.customerSatisfaction || ''}
                      onChange={(e) =>
                        setMarketData({
                          ...marketData,
                          customerSatisfaction: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Market Growth Rate (%)"
                      value={marketData.marketGrowth || ''}
                      onChange={(e) =>
                        setMarketData({ ...marketData, marketGrowth: Number(e.target.value) })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Online Presence (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={marketData.onlinePresence || ''}
                      onChange={(e) =>
                        setMarketData({
                          ...marketData,
                          onlinePresence: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Operational Efficiency */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Speed sx={{ fontSize: 32, color: '#8b5cf6', mr: 2 }} />
              <Typography variant="h5" fontWeight={700}>
                Operational Efficiency Assessment
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Process Efficiency
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Production Efficiency (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={operationalData.productionEfficiency || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          productionEfficiency: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Technology Adoption (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={operationalData.technologyAdoption || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          technologyAdoption: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Quality Control (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={operationalData.qualityControl || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          qualityControl: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Human Resources
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Employee Productivity (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={operationalData.employeeProductivity || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          employeeProductivity: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Staff Retention Rate (%)"
                      inputProps={{ max: 100 }}
                      value={operationalData.staffRetention || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          staffRetention: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Training Programs (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={operationalData.trainingPrograms || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          trainingPrograms: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Management & Systems
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Management Quality (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={operationalData.managementQuality || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          managementQuality: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="System Integration (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={operationalData.systemIntegration || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          systemIntegration: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Scalability (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={operationalData.scalability || ''}
                      onChange={(e) =>
                        setOperationalData({
                          ...operationalData,
                          scalability: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Growth Potential */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Rocket sx={{ fontSize: 32, color: '#f59e0b', mr: 2 }} />
              <Typography variant="h5" fontWeight={700}>
                Growth Potential Assessment
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Market Opportunities
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Market Expansion Potential (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={growthData.marketExpansion || ''}
                      onChange={(e) =>
                        setGrowthData({
                          ...growthData,
                          marketExpansion: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Product Development Potential (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={growthData.productDevelopment || ''}
                      onChange={(e) =>
                        setGrowthData({
                          ...growthData,
                          productDevelopment: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Strategic Partnerships (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={growthData.strategicPartnerships || ''}
                      onChange={(e) =>
                        setGrowthData({
                          ...growthData,
                          strategicPartnerships: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Internal Growth Factors
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Innovation Capability (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={growthData.innovationCapability || ''}
                      onChange={(e) =>
                        setGrowthData({
                          ...growthData,
                          innovationCapability: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Financial Resources (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={growthData.financialResources || ''}
                      onChange={(e) =>
                        setGrowthData({
                          ...growthData,
                          financialResources: Number(e.target.value),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Adaptability (1-10)"
                      inputProps={{ min: 1, max: 10 }}
                      value={growthData.adaptability || ''}
                      onChange={(e) =>
                        setGrowthData({ ...growthData, adaptability: Number(e.target.value) })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Calculate Button */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Calculate />}
            onClick={handleCalculate}
            disabled={loading}
            sx={{
              bgcolor: '#22d3ee',
              color: '#1e293b',
              borderRadius: 50,
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#06b6d4',
              },
            }}
          >
            {loading ? 'Calculating...' : 'Calculate Business Valuation'}
          </Button>
        </Box>

        {loading && <LinearProgress sx={{ mb: 4 }} />}
      </Container>

      {/* Success Modal */}
      <Modal
        open={showSuccessModal}
        onClose={() => {}}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '500px' },
            bgcolor: 'background.paper',
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
            outline: 'none',
          }}
        >
          <IconButton
            onClick={() => setShowSuccessModal(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'grey.500',
            }}
          >
            <Close />
          </IconButton>

          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: '#22d3ee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <Email sx={{ fontSize: 40, color: 'white' }} />
            </Box>

            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
              Success!
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Your business valuation report has been calculated and sent to your email address.
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Please check <strong>{contactInfo.email}</strong> for your detailed assessment report.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="caption" color="text.secondary">
              Didn't receive the email? Check your spam folder or contact us at info@trinitee.co.za
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default BusinessAssessment
