module.exports = async function (context, req) {
  const date = "2024-01-26T12:15:40.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

