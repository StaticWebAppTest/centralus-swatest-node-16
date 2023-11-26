module.exports = async function (context, req) {
  const date = "2023-11-26T13:09:37.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

