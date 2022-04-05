module.exports = async function (context, req) {
  const date = "2022-04-05T21:08:48.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

