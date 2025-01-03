module.exports = async function (context, req) {
  const date = "2025-01-03T03:16:15.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

