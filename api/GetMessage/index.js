module.exports = async function (context, req) {
  const date = "2023-08-09T20:09:43.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

