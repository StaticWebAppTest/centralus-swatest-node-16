module.exports = async function (context, req) {
  const date = "2024-11-25T10:13:41.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

