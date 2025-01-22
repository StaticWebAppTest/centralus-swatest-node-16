module.exports = async function (context, req) {
  const date = "2025-01-22T14:11:21.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

