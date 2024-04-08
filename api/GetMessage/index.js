module.exports = async function (context, req) {
  const date = "2024-04-08T14:08:48.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

