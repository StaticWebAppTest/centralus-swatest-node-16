module.exports = async function (context, req) {
  const date = "2025-11-28T16:17:01.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

