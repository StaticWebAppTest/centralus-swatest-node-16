module.exports = async function (context, req) {
  const date = "2024-12-01T17:09:57.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

