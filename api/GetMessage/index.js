module.exports = async function (context, req) {
  const date = "2022-04-23T22:10:17.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

