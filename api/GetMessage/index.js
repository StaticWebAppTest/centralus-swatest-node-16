module.exports = async function (context, req) {
  const date = "2025-01-02T22:10:47.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

