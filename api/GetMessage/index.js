module.exports = async function (context, req) {
  const date = "2023-09-15T05:08:17.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

