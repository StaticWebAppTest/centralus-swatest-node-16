module.exports = async function (context, req) {
  const date = "2025-12-02T12:30:34.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

