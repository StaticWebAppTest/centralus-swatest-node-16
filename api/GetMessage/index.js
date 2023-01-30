module.exports = async function (context, req) {
  const date = "2023-01-30T10:10:40.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

