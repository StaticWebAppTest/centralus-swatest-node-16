module.exports = async function (context, req) {
  const date = "2023-11-19T02:24:49.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

