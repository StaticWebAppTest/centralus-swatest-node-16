module.exports = async function (context, req) {
  const date = "2022-04-01T13:27:41.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

