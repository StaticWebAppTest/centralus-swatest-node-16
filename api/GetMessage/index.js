module.exports = async function (context, req) {
  const date = "2024-07-08T09:11:58.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

