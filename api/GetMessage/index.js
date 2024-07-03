module.exports = async function (context, req) {
  const date = "2024-07-03T05:10:21.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

