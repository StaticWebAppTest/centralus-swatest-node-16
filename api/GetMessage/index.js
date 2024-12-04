module.exports = async function (context, req) {
  const date = "2024-12-04T10:13:48.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

