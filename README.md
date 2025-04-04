### Scripts:

- **npm start** : Runs the project using `nodemon` with watching enabled.
- **npm serve** : Simply runs the application using `node`, without watch.
- **npm format** : Formats the code using `prettier` with the defined style.
- **npm lint** : Performs a code check using `eslint` to detect potential errors and style issues.
- **npm lint:fix** : Same as `lint`, but with automatic fixing of detected issues.


### Models (pseudocode):

```
type User {
  _id: ID
  createdAt: String
  lastModified: String
  login: String
  nick: String
  acl: [String]
  avatar: Media
  chats: [Chat]
}

type Message {
  _id: ID
  createdAt: String
  lastModified: String
  owner: User
  chat: Chat
  text: String
  media: [Media]
  replies: [Message]
  replyTo: Message
  forwarded: Message
  forwardWith: [Message]
}

type Chat {
  _id: ID
  createdAt: String
  lastModified: String
  type: private | public
  owner: User
  title: String
  members: [User]
  messages: [Message]
  categories: [ChatCategory]
  avatar: Media
}

type ChatCategory {
  _id: ID
  createdAt: String
  lastModified: String
  title: String
  chats: [Chat]
}

type Media {
  _id: ID,
  createdAt: String
  lastModified: String
  owner: User
  text: String,
  url: String,
  originalFileName: String,
  type: String
  userAvatar: User
  chatAvatars: [Chat]
  messages: [Message]
}
```