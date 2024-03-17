module.exports = async function (context, req) {
  const date = "2024-03-17T22:08:05.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

