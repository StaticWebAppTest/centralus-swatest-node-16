module.exports = async function (context, req) {
  const date = "2022-08-24T01:04:02.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

