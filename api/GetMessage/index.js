module.exports = async function (context, req) {
  const date = "2022-07-13T19:08:56.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

