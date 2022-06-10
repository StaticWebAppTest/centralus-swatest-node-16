module.exports = async function (context, req) {
  const date = "2022-06-10T08:13:26.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

