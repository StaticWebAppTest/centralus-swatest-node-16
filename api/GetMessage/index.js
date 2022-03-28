module.exports = async function (context, req) {
  const date = "2022-03-28T03:26:46.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

