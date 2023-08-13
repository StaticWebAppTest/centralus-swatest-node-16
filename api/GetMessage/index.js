module.exports = async function (context, req) {
  const date = "2023-08-13T02:13:23.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

