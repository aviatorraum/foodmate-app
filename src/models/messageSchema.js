const messageSchema = {
  title: 'messages',
  version: 0,
  description: 'messages',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    text: {
      type: 'string',
      default: '',
    },
    image: {
      type: 'string',
      default: '',
    },
    attachment: {
      type: 'string',
      default: '',
    },
    system: {
      type: 'boolean',
      default: false
    },
    user: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        avatar: {
          type: 'string',
        },
      }
    },
    createAt: {
      type: 'string',
      format: 'date-time',
    },
  },
  indexes: [
    'id',
    'createAt',
  ],
  required: [],
  encrypted: [],
};

export default messageSchema;
