module.exports = async function (context, req) {
  const date = "2024-03-14T08:11:49.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

