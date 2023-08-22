module.exports = async function (context, req) {
  const date = "2023-08-22T06:11:02.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

