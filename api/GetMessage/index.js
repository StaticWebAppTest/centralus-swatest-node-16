module.exports = async function (context, req) {
  const date = "2022-07-06T06:13:43.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

