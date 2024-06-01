module.exports = async function (context, req) {
  const date = "2024-06-01T19:09:29.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

