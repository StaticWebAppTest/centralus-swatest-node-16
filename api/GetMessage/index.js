module.exports = async function (context, req) {
  const date = "2022-08-30T01:12:15.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

