module.exports = async function (context, req) {
  const date = "2025-11-20T10:15:26.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

