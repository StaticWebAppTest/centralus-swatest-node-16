module.exports = async function (context, req) {
  const date = "2025-01-04T02:11:34.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

