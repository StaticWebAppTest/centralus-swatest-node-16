module.exports = async function (context, req) {
  const date = "2022-05-17T07:10:44.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

