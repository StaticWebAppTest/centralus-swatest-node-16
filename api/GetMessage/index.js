module.exports = async function (context, req) {
  const date = "2025-05-21T16:17:05.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

