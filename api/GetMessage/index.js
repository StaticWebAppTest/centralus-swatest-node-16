module.exports = async function (context, req) {
  const date = "2024-02-25T15:07:50.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

