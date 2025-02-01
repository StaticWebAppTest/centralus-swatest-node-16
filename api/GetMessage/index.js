module.exports = async function (context, req) {
  const date = "2025-02-01T11:08:32.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

