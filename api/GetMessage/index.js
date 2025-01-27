module.exports = async function (context, req) {
  const date = "2025-01-27T08:16:28.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

