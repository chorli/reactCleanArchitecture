import postsServiceMock from "./posts.service.mock";
import postsService from "./posts.service";

const environment = "development"; //process.NODE_ENV

const services = {
    service : environment === "development" ? postsServiceMock : postsService
}

export default services