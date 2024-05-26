module.exports = async function (context, req) {
  const date = "2024-05-26T10:10:20.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

