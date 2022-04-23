module.exports = async function (context, req) {
  const date = "2022-04-23T20:11:36.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

