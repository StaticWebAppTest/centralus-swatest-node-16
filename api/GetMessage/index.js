module.exports = async function (context, req) {
  const date = "2023-01-31T04:11:49.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

