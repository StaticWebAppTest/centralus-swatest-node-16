module.exports = async function (context, req) {
  const date = "2022-04-06T02:25:54.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

