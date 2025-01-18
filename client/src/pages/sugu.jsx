import Filters from '../components/Filters';
import '../assets/main.css';
const Sugu = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">

                    <div class="col-md-3">
                        <Filters category="Home" />
                    </div>


                    <div class="col-md-9">
                        <h1 class="text-center mb-4">Products</h1>
                        <div id="products" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

                            <div class="col">
                                <div class="card skeleton-card skeleton"></div>
                            </div>
                            <div class="col">
                                <div class="card skeleton-card skeleton"></div>
                            </div>
                            <div class="col">
                                <div class="card skeleton-card skeleton"></div>
                            </div>
                            <div class="col">
                                <div class="card skeleton-card skeleton"></div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mt-4">
                            <button class="btn btn-primary" id="loadMore">Next Page</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel">Product Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div id="productDetailsSkeleton" class="skeleton skeleton-card mb-3"></div>
                            <h3 id="productTitle" class="text-center"></h3>
                            <p id="productDescription"></p>
                            <h4 class="text-center text-success" id="productPrice"></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sugu;