module.exports = async function (context, req) {
  const date = "2023-03-18T20:09:17.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

