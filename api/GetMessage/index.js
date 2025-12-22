module.exports = async function (context, req) {
  const date = "2025-12-22T21:12:54.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

