module.exports = async function (context, req) {
  const date = "2022-11-06T01:03:24.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

