export default {
  goMain: 'Go to main page',
  loading: 'Loading...',
  submit: 'Submit',
  alt: {
    logo: 'Logo',
  },
  sorting: {
    asc: 'Ascending',
    desc: 'Descending',
  },
  menuItems: {
    home: 'Home',
    calls: 'Calls',

  },
  errors: {
    oops: 'Oops!',
    unexpected: 'Sorry, an unexpected error has occurred. Probably this page is not implemented yet.',
    mustBeNumber: 'Must be a number',
  },
  placeholders: {
    email: 'max-mustermann@gmail.com',
    username: 'max-mustermann',
    phone: '+49 123 456789',
    password: 'Password',
    group: 'admin',
    groupDescription: 'Admins',
    code: '123456',
    role: 'admin',
    roleDescription: 'Role that has access to everything',
    select: (objectName: string) => `Select ${objectName}`,
  },
  table: {
    actions: {
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
    },
  },
  toasts: {
    created: (objectName: string) => `${objectName} created`,
    updated: (objectName: string) => `${objectName} updated`,
    deleted: (objectName: string) => `${objectName} deleted`,
    errors: {
      create: (objectName: string) => `Error creating ${objectName}`,
      update: (objectName: string) => `Error updating ${objectName}`,
      delete: (objectName: string) => `Error deleting ${objectName}`,
      fetchError: (objectName: string) => `Error fetching ${objectName}`,
      sessionExpired: 'Session expired, please login again',
    },
  },
};
