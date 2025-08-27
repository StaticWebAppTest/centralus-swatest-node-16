module.exports = async function (context, req) {
  const date = "2025-08-27T16:16:13.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

