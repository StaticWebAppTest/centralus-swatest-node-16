module.exports = async function (context, req) {
  const date = "2024-03-26T16:11:40.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

