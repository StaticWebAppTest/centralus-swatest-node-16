module.exports = async function (context, req) {
  const date = "2022-04-05T08:13:31.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

