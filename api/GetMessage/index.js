module.exports = async function (context, req) {
  const date = "2024-04-06T01:40:24.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

