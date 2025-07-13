module.exports = async function (context, req) {
  const date = "2025-07-13T10:13:41.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

