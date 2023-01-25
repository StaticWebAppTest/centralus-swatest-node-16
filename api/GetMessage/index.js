module.exports = async function (context, req) {
  const date = "2023-01-25T13:16:32.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

