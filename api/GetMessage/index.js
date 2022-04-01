module.exports = async function (context, req) {
  const date = "2022-04-01T15:11:21.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

