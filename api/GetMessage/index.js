module.exports = async function (context, req) {
  const date = "2025-01-13T10:13:23.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

