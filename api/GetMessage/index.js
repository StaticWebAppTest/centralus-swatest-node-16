module.exports = async function (context, req) {
  const date = "2025-05-15T14:14:14.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

