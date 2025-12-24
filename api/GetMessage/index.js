module.exports = async function (context, req) {
  const date = "2025-12-24T12:30:01.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

