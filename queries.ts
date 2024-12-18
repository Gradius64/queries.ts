import { gql } from '@apollo/client';

export const GET_ME = gql`
  query Me {
    me {
      id
      username
      email
      // Add any other fields you need
    }
  }
`;