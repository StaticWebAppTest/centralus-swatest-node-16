module.exports = async function (context, req) {
  const date = "2025-04-09T14:13:37.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

