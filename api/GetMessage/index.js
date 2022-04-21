module.exports = async function (context, req) {
  const date = "2022-04-21T04:49:47.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

