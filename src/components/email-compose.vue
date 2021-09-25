<template>
     <div class="content-page">
            <!-- Start content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="page-title-box">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <h4 class="page-title">Email Compose</h4>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-right">
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Stexo</a></li>
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Email</a></li>
                                    <li class="breadcrumb-item active">Email Compose</li>
                                </ol>
                            </div>
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end page-title -->

                    <div class="row">
                        <div class="col-12">
                            <!-- Left sidebar -->
                            <div class="email-leftbar card">
                                <a href="email-compose.html" class="btn btn-danger rounded btn-custom btn-block waves-effect waves-light">Compose</a>

                                <h6 class="m-t-30">My Email</h6>

                                <div class="mail-list m-t-10">
                                        <a href="#" class="active"> Inbox <span class="float-right">89</span> <i class="ti-archive mr-2"></i> </a>
                                        <a href="#"> Sent <span class="float-right">24</span><i class="ti-location-arrow mr-2"></i></a>
                                        <a href="#"> Starred<span class="float-right">48</span><i class="ti-star mr-2"></i></a>
                                        <a href="#"> Draft<span class="float-right">72</span><i class="ti-pencil  mr-2"></i></a>
                                        <a href="#"> Spam <span class="float-right">16</span><i class="ti-alert mr-2"></i></a>
                                        <a href="#"> Deleted<span class="float-right">02</span><i class="ti-trash mr-2"></i></a>
                                    </div>

                                <h6 class="m-t-20">Filter by Labels</h6>

                                <div class="mail-list m-t-10">
                                    <a href="#"><span class="mdi mdi-label-outline text-danger mr-2"></span>Freelance</a>
                                    <a href="#"><span class="mdi mdi-label-outline text-info mr-2"></span>Social</a>
                                    <a href="#"><span class="mdi mdi-label-outline text-primary mr-2"></span>Friends</a>
                                    <a href="#"><span class="mdi mdi-label-outline text-success mr-2"></span>Family</a>
                                </div>

                            </div>
                            <!-- End Left sidebar -->

                            <!-- Right Sidebar -->
                            <div class="email-rightbar mb-3">

                                <div class="card">
                                    <div class="card-body">

                                        <form>
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="To">
                                            </div>

                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Subject">
                                            </div>
                                            <div class="form-group">
                                                <div class="summernote">
                                                    <h6>Hello Summer note</h6>
                                                    <ul>
                                                        <li>
                                                            Select a text to reveal the toolbar.
                                                        </li>
                                                        <li>
                                                            Edit rich document on-the-fly, so elastic!
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        End of air-mode area
                                                    </p>

                                                </div>
                                            </div>

                                            <div class="btn-toolbar form-group mb-0">
                                                <div class="">
                                                    <button type="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-save"></i></button>
                                                    <button type="button" class="btn btn-danger waves-effect waves-light m-r-5"><i class="far fa-trash-alt"></i></button>
                                                    <button class="btn btn-primary waves-effect waves-light"> <span>Send</span> <i class="fab fa-telegram-plane m-l-10"></i> </button>
                                                </div>
                                            </div>

                                        </form>

                                    </div>

                                </div>

                            </div>
                            <!-- end Col-9 -->

                        </div>

                    </div>
                    <!-- End row -->

                </div>
                <!-- container-fluid -->

            </div>
            <!-- content -->

            <footer class="footer">
                © 2019 - 2020 Stexo <span class="d-none d-sm-inline-block"> - Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesdesign</span>.
            </footer>

        </div>
</template>