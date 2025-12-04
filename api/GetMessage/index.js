module.exports = async function (context, req) {
  const date = "2025-12-04T16:20:05.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

