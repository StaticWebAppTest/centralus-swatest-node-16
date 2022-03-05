module.exports = async function (context, req) {
  const date = "2022-03-05T19:08:01.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

