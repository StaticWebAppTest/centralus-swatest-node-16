module.exports = async function (context, req) {
  const date = "2025-03-19T15:13:35.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

