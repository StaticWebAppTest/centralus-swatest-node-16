module.exports = async function (context, req) {
  const date = "2025-01-23T18:15:55.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

