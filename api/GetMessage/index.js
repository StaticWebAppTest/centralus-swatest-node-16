module.exports = async function (context, req) {
  const date = "2024-12-15T15:11:22.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

