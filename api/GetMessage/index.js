module.exports = async function (context, req) {
  const date = "2024-12-06T10:13:38.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

