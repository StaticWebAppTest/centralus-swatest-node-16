module.exports = async function (context, req) {
  const date = "2025-01-17T12:21:24.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

