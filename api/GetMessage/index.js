module.exports = async function (context, req) {
  const date = "2023-12-30T01:43:27.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

