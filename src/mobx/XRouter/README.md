# XRouter

Mobx powered `History` router with type safety.

```tsx
import { XRouter } from 'xrouter'

//
// Define some routes
//

const HomeRoute = XRoute(
  'home',
  '/:language(en|da|de)?', // Optional language param
  {} as { language?: 'en'|'da'|'de' } 
)
const UserProfileRoute = XRoute(
  'userProfile',
  '/:language(en|da|de)/user/:userId', // All params required
  {} as { language: 'en'|'da'|'de', userId: string } 
)

//
// Construct 
//

import { createHashHistory } from 'history'

const router = new XRouter(
  [
    UserProfileRoute,
    HomeRoute,
  ],
  createHashHistory()
)

//
// Use it
//

import { autorun } from 'mobx

// Log some changes
autorun(() => {
  console.log(
    'Params:', router.route?.params
  )
})

// Navigate to: /en
router.routes.home.push({ language: 'en' })

// Navigates to: /en/user/22
router.routes.userProfile.push({ language: 'en', userId: '55' })

// Just change the language in the active route.
// This works as long as the parameter is shared between all routes.
// Navigates to: /da/user/22
router.route?.push({ language: 'da' })

// Re-use the current language
// Navigates to: /da/
router.routes.home.push({ language: router.route?.params?.language })

// Provide a route object to route from anywhere:
// Navigate to: /de/user/55
router.push(UserProfileRoute, { language: 'de', userId: '55' })

// Access route properties:
router.route?.params?.userId // => 55
router.route?.params?.language // => 'de'

// Use routes in your own mobx models:

import { makeAutoObservable } from 'mobx'

class UserProfilePage {
  constructor(private router: XRouter) {
    this.router = router

    makeAutoObservable(this)
  }

  get route() {
    return this.router.routes.userProfile
  }

  get userId() {
    return this.route.params?.userId
  }

  setUserId(userId: string) {
    // Notice we get to re-use the `language` parameter
    this.route.push({ ...this.route.params, userId })
  }
}

// Play around with user profile:
void (async () => {
  const userProfilePage = new UserProfilePage(router)

  userProfilePage.userId // 55

  userProfilePage.setUserId('200')

  await delay(50) // Give it time to update the URL and come back...

  userProfilePage.userId // 200
})()

// and in react:

import { observer } from 'mobx-react-lite

const Component = observer(() => {
  const [router] = React.useState(() =>
    new XRouter(
      [UserProfileRoute, HomeRoute],
      createHashHistory()
    )
  )
  return <>
    {router.route?.key === 'home' && <div>Home Page!</div>}
    {
      // Or do this:
    }
    {router.routes.userProfile.isActive &&
      <div>
        User Profile!
        UserID: {router.route.userProfile.params?.userId}
      </div>
    }

  </>
})

```