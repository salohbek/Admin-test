<template>
  <div class="content-page">
    <!-- Start content -->
    <div class="content">
      <div class="container-fluid">
        <div class="page-title-box">
          <div class="row align-items-center">
            <div class="col-sm-6">
              <h4 class="page-title">Data Table</h4>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-right">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0);">Stexo</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="javascript:void(0);">Tables</a>
                </li>
                <li class="breadcrumb-item active">Data Table</li>
              </ol>
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end page-title -->

        <div class="row">
          <div class="col-12">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title">Default Datatable</h4>
                <p class="sub-title">
                  DataTables has most features enabled by default, so all you
                  need to do to use it with your own tables is to call the
                  construction function: <code>$().DataTable();</code>.
                </p>

                <table
                  id="datatable"
                  class="table table-bordered dt-responsive nowrap"
                  style="
                    border-collapse: collapse;
                    border-spacing: 0;
                    width: 100%;
                  "
                >
                  <thead>
                    <tr>
                      <th>text</th>
                      <th>delete/update</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>'client'</td>
                    <td>
                      <button>delete</button>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col-12">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title">Buttons example</h4>
                <p class="sub-title../plugins">
                  The Buttons extension for DataTables provides a common set of
                  options, API methods and styling to display buttons on a page
                  that will interact with a DataTable. The core library provides
                  the based framework upon which plug-ins can built.
                </p>

                <table
                  id="datatable-buttons"
                  class="
                    table table-striped table-bordered
                    dt-responsive
                    nowrap
                  "
                  style="
                    border-collapse: collapse;
                    border-spacing: 0;
                    width: 100%;
                  "
                >
                  <thead>
                    <tr></tr>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>ID</th>
                      <th>Buttons</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(contact, index) in contacts" :key="contact.id">
                      <td>{{ contact.first_name }}</td>
                      <td>{{ contact.email }}</td>
                      <td>{{ contact.id }}</td>
                      <td>
                        <button
                          @click="editClick(index)"
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                        <button
                          class="btn-primary mx-2"
                          @click="getInfo(contact.id)"
                        >
                          info
                        </button>
                        <button
                          class="btn-danger"
                          @click="deleteContact(contact.id)"
                        >
                          delete
                        </button>
                        <div class="container">
                          <!-- Modal -->
                          <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title text-danger"
                                    id="exampleModalLabel"
                                  >
                                    Login Form
                                  </h5>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Name Users</label
                                      >
                                      <input
                                        v-model="first_name"
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                      />
                                      <div id="emailHelp" class="form-text">
                                        We'll never share your email with anyone
                                        else.
                                      </div>
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputPassword1"
                                        class="form-label"
                                        >Email</label
                                      >
                                      <input
                                        v-model="email"
                                        type="email"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                      />
                                    </div>
                                    <button
                                      type="submit"
                                      class="btn btn-primary"
                                      @click.prevent="edit()"
                                      data-bs-dismiss="modal"
                                    >
                                      Edit
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

              
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- content -->
    <footer class="footer">
      © 2019 - 2020 Stexo
      <span class="d-none d-sm-inline-block">
        - Crafted with <i class="mdi mdi-heart text-danger"></i> by
        Themesdesign</span
      >.
    </footer>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { mapGetters } from "vuex";
export default {
  name: "tables-datatable",
  data() {
    return {
      showModal: false,
      first_name: "",
      email: "",
      id: "",
      pagination:{}
    };
  },
  props: ["contact"],
  computed: {
    ...mapGetters(["contacts"]),
     },
   methods: {
   
       openModal() {
      this.showModal = true;
    },
    editClick(index) {
      this.id = index;
    },
    edit() {
      this.$store.state.contacts[this.id].email = this.email;
      this.$store.state.contacts[this.id].first_name = this.first_name;
    },
  },
};
</script>
<style >
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
</style>