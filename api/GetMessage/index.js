module.exports = async function (context, req) {
  const date = "2025-05-24T16:14:02.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

