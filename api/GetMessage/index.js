module.exports = async function (context, req) {
  const date = "2022-09-27T19:17:22.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

