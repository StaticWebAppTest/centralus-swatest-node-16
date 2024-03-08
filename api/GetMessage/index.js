module.exports = async function (context, req) {
  const date = "2024-03-08T05:10:08.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

