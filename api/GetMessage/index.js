module.exports = async function (context, req) {
  const date = "2025-05-04T04:16:47.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

