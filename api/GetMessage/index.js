module.exports = async function (context, req) {
  const date = "2024-11-23T23:11:57.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

