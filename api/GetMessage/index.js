module.exports = async function (context, req) {
  const date = "2025-01-04T06:15:16.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

