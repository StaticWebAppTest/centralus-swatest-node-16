module.exports = async function (context, req) {
  const date = "2025-01-23T00:55:48.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

