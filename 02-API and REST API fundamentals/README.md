API: API is set of rules and protocols used to communicate two different software systems

REST API: One of the types of API,in this HTTP protocol is used and some methods-
        GET: Retrieves a resource or a list of resources. Should not modify data on the server (server se data fetch krwana ho tb use krtte hai)
        Post: Creates a new resource. The request body contains the data for the new resource (Jb server pr data send krna ho)
        PUT: Updates a resource by replacing it with new data. Requires complete new representation in the request body ()
        PATCH: Updates a resource by partially modifying it. Requires only the modified fields in the request body. (Jb data server pr already hai aur uss data ko update krna ho)
        Delete: Deletes a resource. (server pr data hai aur usko delete krna hai)