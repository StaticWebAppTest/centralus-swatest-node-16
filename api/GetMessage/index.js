module.exports = async function (context, req) {
  const date = "2022-03-17T22:10:26.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

