module.exports = async function (context, req) {
  const date = "2022-05-01T16:14:53.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

