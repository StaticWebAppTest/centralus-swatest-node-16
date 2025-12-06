module.exports = async function (context, req) {
  const date = "2025-12-06T11:10:39.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

