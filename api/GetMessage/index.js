module.exports = async function (context, req) {
  const date = "2025-01-17T06:16:05.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

