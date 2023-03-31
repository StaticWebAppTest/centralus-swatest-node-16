module.exports = async function (context, req) {
  const date = "2023-03-31T15:09:23.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

