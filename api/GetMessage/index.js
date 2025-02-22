module.exports = async function (context, req) {
  const date = "2025-02-22T14:09:16.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

