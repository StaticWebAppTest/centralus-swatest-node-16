module.exports = async function (context, req) {
  const date = "2022-09-17T22:11:24.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

