module.exports = async function (context, req) {
  const date = "2022-12-13T19:08:04.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

