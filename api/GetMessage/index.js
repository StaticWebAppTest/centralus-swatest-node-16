module.exports = async function (context, req) {
  const date = "2025-02-04T21:10:34.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

