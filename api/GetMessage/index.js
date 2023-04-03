module.exports = async function (context, req) {
  const date = "2023-04-03T22:08:02.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

