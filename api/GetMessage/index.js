module.exports = async function (context, req) {
  const date = "2024-07-06T03:12:54.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

