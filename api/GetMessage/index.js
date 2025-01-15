module.exports = async function (context, req) {
  const date = "2025-01-15T11:09:43.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

