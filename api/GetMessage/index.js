module.exports = async function (context, req) {
  const date = "2024-08-29T12:20:39.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

