module.exports = async function (context, req) {
  const date = "2022-08-03T04:56:49.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

