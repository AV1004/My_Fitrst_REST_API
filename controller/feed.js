exports.getPosts = (req, res, next) => {
  // So here we are not return UI as we are builidng REST API which only transfers data in json so here we are sending json data to back!
  //   Remember it that whenever we are making REST API then we must have to set status code as it can help frontend devloper to work with data and aapend it to UI properly!
  //   Here status code 200 ====> "200 means success!"
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is my first post!" }],
  });
  //   as shown above we sent json and json menas Javascript Object Notation which is similar to Javascript object!
};

//Here we can give it name postPost but it would be confiusing so assume it as postPost
exports.createPost = (req, res, next) => {
  // Here accesing of data will be same the body-parser will change to check that go to app.js:)
  const title = req.body.title;
  const content = req.body.content;

  // create post in DB!
  //   Here 201 status code ====> "201 means successfully resource created!"
  res.status(201).json({
    message: "Post Created Successfully!",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
