module.exports = async function (context, req) {
  const date = "2025-01-31T05:11:28.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

