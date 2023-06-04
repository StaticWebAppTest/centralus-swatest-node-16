module.exports = async function (context, req) {
  const date = "2023-06-04T03:01:55.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

