module.exports = async function (context, req) {
  const date = "2022-03-05T08:11:26.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

