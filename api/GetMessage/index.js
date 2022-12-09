module.exports = async function (context, req) {
  const date = "2022-12-09T04:11:58.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

