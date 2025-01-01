module.exports = async function (context, req) {
  const date = "2025-01-01T14:10:30.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

