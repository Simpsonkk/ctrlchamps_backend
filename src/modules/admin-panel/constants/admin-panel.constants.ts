export const PAGINATION_LIMIT = 10;

export const FETCHED_ADMINS_EXAMPLE = {
  data: [
    {
      id: 'cf480cee-3001-404e-b145-2727691802',
      email: 'admin@gmail.com',
      password: '$2b$10$Mnhfa3ebTWzVIsIpNxAqOuq9yY5Wr999JpPTU1fSzdytXn9ybt',
      firstName: 'Admin2',
      lastName: 'one',
      phoneNumber: '+14775444472',
      dateOfBirth: '12/18/2005',
      isOpenToSeekerHomeLiving: false,
      isVerified: false,
      role: 'Admin',
      country: 'Canada',
      state: '-',
      city: '-',
      zipCode: '-',
      address: '-',
      otpCode: null,
      balance: 100000,
      avatar: '',
    },
    {
      id: 'f037e391-f212-4f58-a11d-3d83e564b0',
      email: 'admin2@gmail.com',
      password: '$2b$10$uUmwPkO8t5PSLRbA7xI00edrhycvHGeakrUWWZEKJqpWetPKHdB',
      firstName: 'Admin',
      lastName: 'two',
      phoneNumber: '+14575444472',
      dateOfBirth: '12/18/2005',
      isOpenToSeekerHomeLiving: false,
      isVerified: false,
      role: 'Admin',
      country: 'Canada',
      state: '-',
      city: '-',
      zipCode: '-',
      address: '-',
      otpCode: null,
      balance: 100000,
      avatar: '',
    },
  ],
  count: 2,
};

export const ADMIN_DETAILS_EXAMPLE = {
  id: 'f037e391-f212-4f58-a11d-3d83e564b0',
  email: 'admin@gmail.com',
  firstName: 'Admin',
  lastName: 'New',
  phoneNumber: '+14575444472',
  role: 'Admin',
  updatedAt: '2024-01-10 15:10:40.765056',
};

export const FETCHED_APPOINTMENTS_EXAMPLE = {
  appointments: [
    {
      id: '342e6b61-7226-4aaa-bd02-068db7178de2',
      userId: '73a6b0c7-90f9-44a1-8338-0665ab02aa34',
      caregiverInfoId: '82f63888-8f8b-4855-8246-77bca6c3b5c8',
      name: 'appointment 1',
      type: 'Recurring',
      status: 'Rejected',
      details: null,
      payment: 84,
      location: 'ChIJQ7N_7WI33okRsxGmDNVXe50',
      activityNote: null,
      diagnosisNote: null,
      capabilityNote: null,
      startDate: '2024-01-16T22:45:00.000Z',
      endDate: '2024-01-25T23:45:00.000Z',
      timezone: 'America/New_York',
      weekday: '["Friday"]',
      signingDate: null,
      createdAt: '2024-01-08T17:39:03.000Z',
      user: {
        firstName: 'Max',
        lastName: 'Vaerf',
      },
      caregiverInfo: {
        id: '82f63888-8f8b-4855-8246-77bca6c3b5c8',
        user: {
          firstName: 'Alex',
          lastName: 'Polofj',
        },
      },
    },
    {
      id: '3f245415-f593-4912-aa1c-489c57791862',
      userId: '73a6b0c7-90f9-44a1-8338-0665ab02aa34',
      caregiverInfoId: '82f63888-8f8b-4855-8246-77bca6c3b5c8',
      name: 'appointment 2',
      type: 'Recurring',
      status: 'Accepted',
      details: null,
      payment: 84,
      location: 'ChIJDa-lLaJZwokRyKcy9RZS_CM',
      activityNote: null,
      diagnosisNote: null,
      capabilityNote: null,
      startDate: '2024-01-08T23:00:00.000Z',
      endDate: '2024-01-15T00:00:00.000Z',
      timezone: 'America/New_York',
      weekday: '["Friday"]',
      signingDate: null,
      createdAt: '2024-01-08T17:39:03.000Z',
      user: {
        firstName: 'Max',
        lastName: 'Vaerf',
      },
      caregiverInfo: {
        id: '82f63888-8f8b-4855-8246-77bca6c3b5c8',
        user: {
          firstName: 'Alex',
          lastName: 'Polofj',
        },
      },
    },
  ],
  count: 2,
};
