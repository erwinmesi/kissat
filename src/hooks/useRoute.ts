export interface Route {
  name: string;
  label: string;
  path: string;

  // Function to generate the path based on params
  makePath: (...params: any) => string;
}

type RouteKeys = 'home' | 'showBreed';

/**
 * Define all the routes in the application.
 * This is so that we can use the route name to navigate to a specific route.
 */
const routes: Record<RouteKeys, Route> = {
  home: {
    name: 'home.index',
    label: 'Home',
    path: '/',
    makePath: () => '/',
  },

  showBreed: {
    name: 'cats.show',
    label: 'Breed Details',
    path: '/:breedId',
    makePath: (breedId: string) => `/${breedId}`,
  },
}

const useRoute = () => {
  return {
    routes,
  }
}

export default useRoute
