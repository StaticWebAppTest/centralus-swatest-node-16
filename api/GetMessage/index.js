module.exports = async function (context, req) {
  const date = "2024-05-09T05:10:43.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

