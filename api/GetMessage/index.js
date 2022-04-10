module.exports = async function (context, req) {
  const date = "2022-04-10T12:16:21.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

