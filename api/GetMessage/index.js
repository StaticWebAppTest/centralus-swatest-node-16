module.exports = async function (context, req) {
  const date = "2022-08-04T19:08:46.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

