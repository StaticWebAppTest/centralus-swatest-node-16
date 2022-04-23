module.exports = async function (context, req) {
  const date = "2022-04-23T03:29:11.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

