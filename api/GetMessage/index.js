module.exports = async function (context, req) {
  const date = "2025-04-03T11:11:24.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

