module.exports = async function (context, req) {
  const date = "2023-04-19T13:12:37.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

