module.exports = async function (context, req) {
  const date = "2022-05-17T21:08:26.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

