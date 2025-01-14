module.exports = async function (context, req) {
  const date = "2025-01-14T14:11:12.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

