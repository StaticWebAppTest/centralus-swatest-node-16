module.exports = async function (context, req) {
  const date = "2025-03-04T17:11:16.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

