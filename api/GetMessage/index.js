module.exports = async function (context, req) {
  const date = "2023-11-18T21:07:15.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

