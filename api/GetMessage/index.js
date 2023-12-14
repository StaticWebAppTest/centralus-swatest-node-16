module.exports = async function (context, req) {
  const date = "2023-12-14T22:08:54.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

