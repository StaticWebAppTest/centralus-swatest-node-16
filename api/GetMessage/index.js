module.exports = async function (context, req) {
  const date = "2024-05-27T13:11:48.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

