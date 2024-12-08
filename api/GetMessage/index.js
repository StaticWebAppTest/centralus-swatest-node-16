module.exports = async function (context, req) {
  const date = "2024-12-08T22:11:11.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

