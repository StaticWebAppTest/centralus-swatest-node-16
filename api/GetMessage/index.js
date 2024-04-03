module.exports = async function (context, req) {
  const date = "2024-04-03T12:16:16.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

