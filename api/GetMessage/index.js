module.exports = async function (context, req) {
  const date = "2022-12-19T22:08:50.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

