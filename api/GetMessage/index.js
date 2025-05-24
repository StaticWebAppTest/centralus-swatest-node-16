module.exports = async function (context, req) {
  const date = "2025-05-24T10:12:24.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

