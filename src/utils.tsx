import { RoutesCreator, RouteCreator } from 'types/base'
import { lazy } from 'react'

export const createRoutes: RoutesCreator = routes => {
  return routes.map(route => {
    return {
      path: route.path,
      Component: lazy(() => import(route.componentPath)),
      Layout: lazy(
        () => import(`./components/layouts/${route.layout || 'Default'}`),
      ),
      roles: route.roles,
    }
  })
}

type CreateMessages = (messages: { id: string; defaultMessage: string }[]) => {
  [key: string]: { id: string; defaultMessage: string }
}
export const createMessages: CreateMessages = messages => {
  return messages.reduce(
    (_messages, message) => ({
      ..._messages,
      [message.id]: message,
    }),
    {},
  )
}