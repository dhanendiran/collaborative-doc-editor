
module.exports = (io) => {
  io.on("connection", (socket) => {

    socket.on("join-document", (docId) => {
      socket.join(docId);
    });

    socket.on("send-changes", ({ docId, content }) => {
      socket.to(docId).emit("receive-changes", content);
    });

  });
};