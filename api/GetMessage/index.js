module.exports = async function (context, req) {
  const date = "2022-08-15T10:12:38.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

