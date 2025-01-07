module.exports = async function (context, req) {
  const date = "2025-01-07T10:13:03.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

