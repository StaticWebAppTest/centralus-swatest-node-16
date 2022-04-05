module.exports = async function (context, req) {
  const date = "2022-04-05T11:09:17.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

