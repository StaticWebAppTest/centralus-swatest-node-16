module.exports = async function (context, req) {
  const date = "2023-01-09T16:17:58.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

