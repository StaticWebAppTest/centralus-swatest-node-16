module.exports = async function (context, req) {
  const date = "2023-03-19T16:11:34.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

