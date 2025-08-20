module.exports = async function (context, req) {
  const date = "2025-08-20T16:16:40.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

