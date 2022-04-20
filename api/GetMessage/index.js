module.exports = async function (context, req) {
  const date = "2022-04-20T22:10:47.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

