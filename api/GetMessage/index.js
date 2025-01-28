module.exports = async function (context, req) {
  const date = "2025-01-28T19:08:59.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

