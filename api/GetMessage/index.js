module.exports = async function (context, req) {
  const date = "2025-01-05T09:10:59.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

