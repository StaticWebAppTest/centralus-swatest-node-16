module.exports = async function (context, req) {
  const date = "2023-06-05T03:11:43.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

