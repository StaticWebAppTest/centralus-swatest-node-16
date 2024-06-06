module.exports = async function (context, req) {
  const date = "2024-06-06T18:12:59.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

