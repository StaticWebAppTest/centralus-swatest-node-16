module.exports = async function (context, req) {
  const date = "2022-04-29T15:16:16.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

