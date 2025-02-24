import {
    Outlet,
    NavLink,
    useLoaderData,
    Form,
    redirect,
  } from "react-router-dom";
  import { getContacts, createContact } from "../contacts";

  export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
  }

    export async function loader() {
        const contacts = await getContacts();
        return { contacts };
    }   

export default function Root() {
    const { contacts } = useLoaderData();
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                    <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {/* other code */}
                    
                  </NavLink>
                  
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }
  