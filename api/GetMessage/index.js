module.exports = async function (context, req) {
  const date = "2022-12-10T22:08:29.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

