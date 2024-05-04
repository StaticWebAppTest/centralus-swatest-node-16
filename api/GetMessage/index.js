module.exports = async function (context, req) {
  const date = "2024-05-04T03:11:04.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

