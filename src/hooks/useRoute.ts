export interface Route {
  name: string;
  label: string;
  path: string;

  // Function to generate the path based on params
  makePath?: (...params: any) => string;
}

type RouteKeys = 'home' | 'showCat';

/**
 * Define all the routes in the application.
 * This is so that we can use the route name to navigate to a specific route.
 */
const routes: Record<RouteKeys, Route> = {
  home: {
    name: 'home.index',
    label: 'Home',
    path: '/',
  },

  showCat: {
    name: 'cats.show',
    label: 'Cat Details',
    path: '/cats/:catId',
    makePath: (catId: string) => `/cats/${catId}`,
  },
}

const useRoute = () => {
  return {
    routes,
  }
}

export default useRoute
