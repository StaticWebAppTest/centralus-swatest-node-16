module.exports = async function (context, req) {
  const date = "2023-02-08T16:13:17.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

