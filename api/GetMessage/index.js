module.exports = async function (context, req) {
  const date = "2024-01-19T02:26:01.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

