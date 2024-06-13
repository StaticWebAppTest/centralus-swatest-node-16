module.exports = async function (context, req) {
  const date = "2024-06-13T22:10:04.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

