module.exports = async function (context, req) {
  const date = "2022-04-20T20:12:49.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

