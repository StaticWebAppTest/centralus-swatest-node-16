module.exports = async function (context, req) {
  const date = "2022-12-06T20:10:11.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

