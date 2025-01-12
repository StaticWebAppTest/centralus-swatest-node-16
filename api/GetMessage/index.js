module.exports = async function (context, req) {
  const date = "2025-01-12T16:12:53.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

