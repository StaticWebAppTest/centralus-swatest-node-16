module.exports = async function (context, req) {
  const date = "2024-04-08T18:14:13.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

