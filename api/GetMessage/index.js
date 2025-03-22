module.exports = async function (context, req) {
  const date = "2025-03-22T16:13:28.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

