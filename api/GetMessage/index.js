module.exports = async function (context, req) {
  const date = "2025-06-01T14:11:20.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

