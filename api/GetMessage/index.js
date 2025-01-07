module.exports = async function (context, req) {
  const date = "2025-01-07T16:29:09.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

