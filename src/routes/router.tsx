import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import App from "../App";
import { NotFound } from "../views/NotFound";
import { Root } from "../layouts/Root";
import { Contact } from "../views/Contact";
import { VehicleCategory } from '../views/VehicleCategory';
//import { VehicleCard } from '../layouts/VehicleCard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      //loader={rootLoader}
      //action={rootAction}
      errorElement={<NotFound />}
    >
      <Route errorElement={<NotFound />}>
        <Route index element={<App />} />
        <Route
          path=":page"
          element={<App />}
          //loader={contactLoader}
          //action={contactAction}
        />
        <Route
          path="contacts/:contactId"
          //element={<Contact />}
          //loader={contactLoader}
          //action={contactAction}
        />
        <Route
          path="contacto"
          element={<Contact />}
          //loader={contactLoader}
          //action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          //element={<EditContact />}
          //loader={contactLoader}
          //action={editAction}
        />
        <Route
          path="categorias"
          element={<VehicleCategory />}
          //loader={contactLoader}
          //action={contactAction}
        />
        <Route path="contacts/:contactId/destroy" />
      </Route>
    </Route>
  )
);
