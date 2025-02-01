module.exports = async function (context, req) {
  const date = "2025-02-01T21:10:34.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

