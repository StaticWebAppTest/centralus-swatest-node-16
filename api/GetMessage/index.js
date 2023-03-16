module.exports = async function (context, req) {
  const date = "2023-03-16T22:09:26.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

