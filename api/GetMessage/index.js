module.exports = async function (context, req) {
  const date = "2025-12-05T03:13:25.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

