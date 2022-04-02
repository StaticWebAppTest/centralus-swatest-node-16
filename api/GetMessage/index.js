module.exports = async function (context, req) {
  const date = "2022-04-02T15:09:55.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

