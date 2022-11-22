module.exports = async function (context, req) {
  const date = "2022-11-22T13:26:32.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

