module.exports = async function (context, req) {
  const date = "2022-04-05T13:21:05.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

