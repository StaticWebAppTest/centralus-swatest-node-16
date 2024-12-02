module.exports = async function (context, req) {
  const date = "2024-12-02T18:17:16.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

