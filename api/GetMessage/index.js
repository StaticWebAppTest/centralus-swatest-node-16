module.exports = async function (context, req) {
  const date = "2025-11-29T06:19:48.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

