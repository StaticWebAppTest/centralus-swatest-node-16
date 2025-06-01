module.exports = async function (context, req) {
  const date = "2025-06-01T17:11:01.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

