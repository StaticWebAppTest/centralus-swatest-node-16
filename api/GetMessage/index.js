module.exports = async function (context, req) {
  const date = "2022-07-07T22:10:07.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

