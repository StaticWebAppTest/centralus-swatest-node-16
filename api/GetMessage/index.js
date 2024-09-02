module.exports = async function (context, req) {
  const date = "2024-09-02T04:13:59.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

