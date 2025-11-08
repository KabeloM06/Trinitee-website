import { gql } from '@apollo/client';

export const GET_ME = gql`
  query GetMe {
    me {
      id
      email
      firstName
      lastName
      role
      isVerified
    }
  }
`;

export const GET_CONTACTS = gql`
  query GetContacts($isRead: Boolean) {
    contacts(isRead: $isRead) {
      id
      name
      email
      subject
      message
      isRead
      createdAt
      updatedAt
    }
  }
`;

export const GET_NEWSLETTER_SUBSCRIBERS = gql`
  query GetNewsletterSubscribers($isActive: Boolean) {
    newsletterSubscribers(isActive: $isActive) {
      id
      email
      isActive
      createdAt
      updatedAt
    }
  }
`;
