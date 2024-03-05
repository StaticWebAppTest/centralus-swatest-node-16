module.exports = async function (context, req) {
  const date = "2024-03-05T06:11:41.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

