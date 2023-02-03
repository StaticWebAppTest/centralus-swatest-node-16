module.exports = async function (context, req) {
  const date = "2023-02-03T14:08:43.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

