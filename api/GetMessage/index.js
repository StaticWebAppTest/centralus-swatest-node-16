module.exports = async function (context, req) {
  const date = "2025-06-01T05:13:42.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

