module.exports = async function (context, req) {
  const date = "2025-06-09T10:15:26.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

