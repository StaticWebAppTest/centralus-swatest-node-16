module.exports = async function (context, req) {
  const date = "2024-04-06T12:15:45.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

