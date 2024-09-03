module.exports = async function (context, req) {
  const date = "2024-09-03T05:11:29.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

