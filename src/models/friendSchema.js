const friendSchema = {
  title: 'friends',
  version: 0,
  description: 'friends',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    phone: {
      type: ['string', 'null'],
    },
    gender: {
      type: ['string', 'null'],
    },
    avatar: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    account: {
      type: 'string',
    },
    room: {
      type: 'string',
    },
    friendId: {
      type: 'string'
    },
    friendCreator: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        phone: {
          type: ['string', 'null'],
        },
        gender: {
          type: ['string', 'null'],
        },
        name: {
          type: 'string',
        },
        account: {
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
    updateAt: {
      type: 'string',
      format: 'date-time',
    },
    status: {
      type: 'number',
      enums: [0, 1, 2],
    },
  },
  indexes: [
    'id',
    'updateAt',
    'createAt',
  ],
  required: [],
  encrypted: [],
};

export default friendSchema;