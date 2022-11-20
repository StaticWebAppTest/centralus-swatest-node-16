module.exports = async function (context, req) {
  const date = "2022-11-20T03:13:03.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

