module.exports = async function (context, req) {
  const date = "2022-07-05T15:11:17.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

