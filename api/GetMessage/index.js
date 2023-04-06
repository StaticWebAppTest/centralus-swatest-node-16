module.exports = async function (context, req) {
  const date = "2023-04-06T10:08:59.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

