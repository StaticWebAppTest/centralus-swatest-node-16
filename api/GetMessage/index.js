module.exports = async function (context, req) {
  const date = "2025-01-16T12:21:52.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

