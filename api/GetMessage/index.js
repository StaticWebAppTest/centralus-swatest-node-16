module.exports = async function (context, req) {
  const date = "2025-12-01T21:11:46.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

