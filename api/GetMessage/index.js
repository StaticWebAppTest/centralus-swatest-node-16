module.exports = async function (context, req) {
  const date = "2025-12-15T06:25:59.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

