module.exports = async function (context, req) {
  const date = "2022-04-30T22:10:37.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

