module.exports = async function (context, req) {
  const date = "2025-11-28T12:28:24.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

