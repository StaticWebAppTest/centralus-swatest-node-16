module.exports = async function (context, req) {
  const date = "2022-12-06T16:13:39.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

