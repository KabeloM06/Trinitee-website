import { gql } from '@apollo/client';

export const SUBMIT_CONTACT = gql`
  mutation SubmitContact($input: ContactInput!) {
    submitContact(input: $input) {
      id
      name
      email
      message
      createdAt
    }
  }
`;

export const SUBSCRIBE_NEWSLETTER = gql`
  mutation SubscribeNewsletter($input: NewsletterInput!) {
    subscribeNewsletter(input: $input) {
      id
      email
      isActive
      createdAt
    }
  }
`;

export const SUBMIT_ASSESSMENT = gql`
  mutation SubmitAssessment($input: AssessmentInput!) {
    submitAssessment(input: $input) {
      id
      name
      email
      phone
      company
      annualRevenue
      challenge
      createdAt
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      refreshToken
      user {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`;

export const REGISTER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      refreshToken
      user {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation VerifyOTP($email: String!, $otp: String!) {
    verifyOTP(email: $email, otp: $otp)
  }
`;
