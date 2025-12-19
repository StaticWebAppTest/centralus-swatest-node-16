module.exports = async function (context, req) {
  const date = "2025-12-19T10:15:54.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

