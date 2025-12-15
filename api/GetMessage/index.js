module.exports = async function (context, req) {
  const date = "2025-12-15T08:23:16.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

