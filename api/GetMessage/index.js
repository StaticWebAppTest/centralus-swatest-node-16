module.exports = async function (context, req) {
  const date = "2022-05-16T20:12:26.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

