module.exports = async function (context, req) {
  const date = "2022-08-05T01:08:37.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

