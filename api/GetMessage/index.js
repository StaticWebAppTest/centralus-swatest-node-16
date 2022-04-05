module.exports = async function (context, req) {
  const date = "2022-04-05T04:12:49.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

