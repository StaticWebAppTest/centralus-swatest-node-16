module.exports = async function (context, req) {
  const date = "2022-12-12T03:15:34.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

