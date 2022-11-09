module.exports = async function (context, req) {
  const date = "2022-11-09T22:11:18.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

