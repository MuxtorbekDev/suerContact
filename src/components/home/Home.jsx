import { toast } from "materialize-css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const Home = ({ contacts, deleteContact }) => {
  const [search, setSearch] = useState("");
  const [newPost, setNewPost] = useState([]);
  let postList = "";

  const searchFunc = () => {
    let newArr = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(search.toLowerCase());
    });
    setNewPost(newArr);
  };

  useEffect(() => {
    searchFunc();
    // eslint-disable-next-line
  }, [search]);

  if (search) {
    postList = newPost;
  } else {
    postList = contacts;
  }

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="row d-flex">
          <Link
            to="/addcontact"
            className="btn col-3 btn-outline-primary my-5 ml-auto "
          >
            Add Post
            <i className="fas fa-user-plus ml-3" />
          </Link>
          <div className="col-7 input-group  mb-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control "
              placeholder="Search..."
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="datalist  mx-auto ">
          <table className="table table-hover">
            <thead className="table-header bg-primary  text-white pb-1">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Employe name</th>
                <th scope="col">Email Address (Personal)</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">City</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {postList.length > 0 ? (
              postList.map((contact, id) => (
                <tbody key={id}>
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.city}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-outline-primary mr-3"
                      >
                        <i className="fas fa-user-edit" />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger "
                        onClick={() => {
                          deleteContact(id);
                          toast.success("Contact updated successfully!!");
                        }}
                      >
                        <i className="fas fa-user-slash" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <NotFound />
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
