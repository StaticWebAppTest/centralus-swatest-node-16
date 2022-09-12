module.exports = async function (context, req) {
  const date = "2022-09-12T23:12:37.928Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

