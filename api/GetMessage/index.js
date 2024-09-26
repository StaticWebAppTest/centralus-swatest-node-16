module.exports = async function (context, req) {
  const date = "2024-09-26T04:14:31.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

