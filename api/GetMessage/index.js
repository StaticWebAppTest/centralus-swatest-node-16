module.exports = async function (context, req) {
  const date = "2025-01-30T21:10:33.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

