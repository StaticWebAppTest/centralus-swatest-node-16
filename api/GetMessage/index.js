module.exports = async function (context, req) {
  const date = "2025-06-03T06:20:06.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

