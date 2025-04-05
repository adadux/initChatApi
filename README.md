### Scripts:

- **npm start** : Runs the project using `nodemon` with watching enabled.
- **npm serve** : Simply runs the application using `node`, without watch.
- **npm format** : Formats the code using `prettier` with the defined style.
- **npm lint** : Performs a code check using `eslint` to detect potential errors and style issues.
- **npm lint:fix** : Same as `lint`, but with automatic fixing of detected issues.


### Models (pseudocode):

```
type User {
  userId: ID
  createdAt: Date
  updatedAt: Date
  login: String
  userRoles: [Role]
  passwordHash: String
  nickName?: String
  avatar?: Media
  chats?: [Chat]
}

type Role {
    roleId: ID
    roleName: String
    description?: String
    permissions: [Permission]
}

type Permission {
    permissionId: ID
    permissionName: String
    description?: String
}

type Message {
  messageId: ID
  createdAt: Date
  updatedAt: Date
  createdBy: User
  updatedBy: User
  owner: User
  chat: Chat
  text?: String
  media?: [Media]
  replies?: [Message]
  replyTo?: Message
  forwarded?: Message
  forwardWith?: [Message]
}

type ChatType {
  chatTypeId: ID
  chatTypeName: String
}

type Chat {
  chatId: ID
  createdAt: Date
  updatedAt: Date
  createdBy: User
  updatedBy: User
  type: ChatType
  owner: User
  title: String
  members: [User]
  messages?: [Message]
  categories?: [ChatCategory]
  avatar?: Media
}

type ChatCategory {
  chatCategoryId: ID
  createdAt: Date
  updatedAt: Date
  createdBy: User
  updatedBy: User
  title: String
  description?: String
  chats?: [Chat]
}

type Media {
  mediaId: ID,
  createdAt: Date
  updatedAt: Date
  createdBy: User
  updatedBy: User
  owner: User
  text?: String,
  url: String,
  fileName: String,
  fileType: String
  userAvatar?: User
  chatAvatars?: [Chat]
  messages?: [Message]
}
```