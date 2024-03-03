module.exports = async function (context, req) {
  const date = "2024-03-03T06:11:41.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

