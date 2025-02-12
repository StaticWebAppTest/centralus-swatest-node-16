module.exports = async function (context, req) {
  const date = "2025-02-12T19:09:52.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

