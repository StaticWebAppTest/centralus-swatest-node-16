module.exports = async function (context, req) {
  const date = "2023-05-18T05:08:43.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

