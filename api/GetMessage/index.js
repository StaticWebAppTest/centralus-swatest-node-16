module.exports = async function (context, req) {
  const date = "2022-05-07T03:29:50.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

