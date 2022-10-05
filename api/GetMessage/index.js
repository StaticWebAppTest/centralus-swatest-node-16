module.exports = async function (context, req) {
  const date = "2022-10-05T18:26:25.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

