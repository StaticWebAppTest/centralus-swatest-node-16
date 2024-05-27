module.exports = async function (context, req) {
  const date = "2024-05-27T15:11:20.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

