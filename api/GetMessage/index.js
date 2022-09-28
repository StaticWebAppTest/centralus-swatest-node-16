module.exports = async function (context, req) {
  const date = "2022-09-28T22:12:52.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

