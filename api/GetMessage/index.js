module.exports = async function (context, req) {
  const date = "2025-02-22T08:13:34.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

