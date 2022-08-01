module.exports = async function (context, req) {
  const date = "2022-08-01T01:09:49.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

