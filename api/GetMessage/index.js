module.exports = async function (context, req) {
  const date = "2023-04-22T03:09:26.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

