module.exports = async function (context, req) {
  const date = "2022-02-24T12:17:01.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

