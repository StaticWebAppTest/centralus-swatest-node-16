module.exports = async function (context, req) {
  const date = "2022-03-06T22:09:17.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

