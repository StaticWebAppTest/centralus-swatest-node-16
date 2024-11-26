module.exports = async function (context, req) {
  const date = "2024-11-26T22:11:39.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

