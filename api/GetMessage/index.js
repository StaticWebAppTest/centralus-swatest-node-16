module.exports = async function (context, req) {
  const date = "2025-01-31T22:10:22.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

