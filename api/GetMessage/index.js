module.exports = async function (context, req) {
  const date = "2025-05-31T07:12:06.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

