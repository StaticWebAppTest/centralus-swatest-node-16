module.exports = async function (context, req) {
  const date = "2025-04-21T16:15:19.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

