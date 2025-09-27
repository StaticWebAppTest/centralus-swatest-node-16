module.exports = async function (context, req) {
  const date = "2025-09-27T13:16:59.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

