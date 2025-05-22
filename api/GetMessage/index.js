module.exports = async function (context, req) {
  const date = "2025-05-22T13:26:48.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

