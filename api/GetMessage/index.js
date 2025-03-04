module.exports = async function (context, req) {
  const date = "2025-03-04T10:13:29.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

