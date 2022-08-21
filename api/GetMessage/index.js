module.exports = async function (context, req) {
  const date = "2022-08-21T13:22:44.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

