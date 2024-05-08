module.exports = async function (context, req) {
  const date = "2024-05-08T21:11:05.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

