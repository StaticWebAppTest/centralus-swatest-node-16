module.exports = async function (context, req) {
  const date = "2022-12-27T20:09:26.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

