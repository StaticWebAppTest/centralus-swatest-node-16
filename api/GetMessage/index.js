module.exports = async function (context, req) {
  const date = "2022-08-04T01:04:31.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

