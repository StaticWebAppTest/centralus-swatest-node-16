module.exports = async function (context, req) {
  const date = "2025-01-06T10:13:04.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

