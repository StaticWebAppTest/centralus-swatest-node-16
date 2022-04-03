module.exports = async function (context, req) {
  const date = "2022-04-03T12:16:28.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

