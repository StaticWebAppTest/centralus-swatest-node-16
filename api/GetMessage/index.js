module.exports = async function (context, req) {
  const date = "2024-12-21T12:20:16.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

