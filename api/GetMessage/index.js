module.exports = async function (context, req) {
  const date = "2022-12-13T07:08:58.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

