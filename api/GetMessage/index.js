module.exports = async function (context, req) {
  const date = "2025-03-22T13:16:26.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

