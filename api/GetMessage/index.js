module.exports = async function (context, req) {
  const date = "2024-09-21T04:13:21.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

