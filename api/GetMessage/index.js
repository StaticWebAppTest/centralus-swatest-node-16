module.exports = async function (context, req) {
  const date = "2025-05-20T11:11:35.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

