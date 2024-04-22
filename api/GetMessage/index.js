module.exports = async function (context, req) {
  const date = "2024-04-22T15:10:17.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

