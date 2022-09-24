module.exports = async function (context, req) {
  const date = "2022-09-24T19:09:43.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

