module.exports = async function (context, req) {
  const date = "2024-06-23T22:09:05.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

