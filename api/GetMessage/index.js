module.exports = async function (context, req) {
  const date = "2022-07-26T21:09:32.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

