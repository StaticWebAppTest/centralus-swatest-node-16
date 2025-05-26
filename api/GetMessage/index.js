module.exports = async function (context, req) {
  const date = "2025-05-26T17:11:10.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

