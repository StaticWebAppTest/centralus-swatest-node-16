module.exports = async function (context, req) {
  const date = "2025-01-09T21:10:51.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

