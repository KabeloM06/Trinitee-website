import { useMutation } from '@apollo/client/react';
import { SUBMIT_CONTACT, SUBSCRIBE_NEWSLETTER } from '../graphql/mutations';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export const useContactForm = () => {
  const [submitContact, { loading, error, data }] = useMutation(SUBMIT_CONTACT, {
    onCompleted: () => {
      console.log('Contact submitted successfully');
    },
    onError: () => {
      console.error('Error submitting contact');
    },
  });

  const submit = async (formData: ContactFormData) => {
    try {
      const result = await submitContact({
        variables: {
          input: formData,
        },
      });
      return (result as any)?.data?.submitContact;
    } catch (err) {
      throw err;
    }
  };

  return { submit, loading, error, data };
};

export const useNewsletter = () => {
  const [subscribe, { loading, error, data }] = useMutation(SUBSCRIBE_NEWSLETTER, {
    onCompleted: () => {
      console.log('Newsletter subscription successful');
    },
    onError: () => {
      console.error('Error subscribing to newsletter');
    },
  });

  const subscribeToNewsletter = async (email: string) => {
    try {
      const result = await subscribe({
        variables: {
          input: { email },
        },
      });
      return (result as any)?.data?.subscribeNewsletter;
    } catch (err) {
      throw err;
    }
  };

  return { subscribeToNewsletter, loading, error, data };
};
