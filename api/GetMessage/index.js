module.exports = async function (context, req) {
  const date = "2025-01-15T19:08:59.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

