module.exports = async function (context, req) {
  const date = "2025-06-01T19:10:14.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

