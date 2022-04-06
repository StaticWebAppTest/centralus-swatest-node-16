module.exports = async function (context, req) {
  const date = "2022-04-06T03:24:43.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

